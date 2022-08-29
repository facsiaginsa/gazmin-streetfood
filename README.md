# Gazmin Streetfood

Gazmin Streetfood is a 3 Dimention Marketplace for Indonesian Streetfood. The user will feel the experience of visiting the place while shopping. Right now, this app **is not working well with SAFARI browser**, please use other browser instead such as **CHROME**.

![Gazmin Home Page](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin.png?raw=true)

We also provide live search bar, if you click the search result, than you will go to the stall directly.

![Gazmin Search Streetfood](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin-search.png?raw=true)

You can click the stall icon, and see what product they offer



This is the Application Architecture:

![Gazmin Architecture](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin-architecture.png?raw=true)

This app is consist of 3 Apps, 2 Redis, 1 Minio. The marketplace microservices is handling request related to marketplace (user management, product, cart, checkout) while the streetview microservices is handling request related to streetview data. Each microservices store their data on seperate Redis Stack.

Minio is used to store the product image, and streetview image.

# Overview video (Optional)

Here's a short video that explains the project and how it uses Redis:

[Insert your own video here, and remove the one below]

[![Embed your YouTube video](https://i.ytimg.com/vi/vyxdC1qK4NE/maxresdefault.jpg)](https://www.youtube.com/watch?v=vyxdC1qK4NE)

## How it works

### How the data is stored:

This App need 2 redis stack, 1 for marketplace and 1 for streetview.

1. Redis for Marketplace

    This is the main database, it is used to store marketplace related data. First we need 3 with Schema type: hash

    Index Name  | Schema
    ----------- | -------------
    user_idx    | FT.CREATE user_idx PREFIX 1 user: SCHEMA user TEXT mail TEXT password TEXT name TEXT address TEXT
    product_idx | FT.CREATE product_idx PREFIX 1 product: SCHEMA name TEXT description TEXT price NUMERIC photo TEXT stock NUMERIC rating NUMERIC stall TAG category TAG
    stall_idx   | FT.CREATE stall_idx PREFIX 1 stall: SCHEMA name TEXT description TEXT yaw NUMERIC pitch NUMERIC scene_id TEXT rating NUMERIC

    And then, for each schema we add the data like these:

    - user_idx used to save user information, the app will save the user information after the user registered to the app. The command is like this: 
        ````
        HMSET user:{userId} user {user} mail {mail} password {password} name {name} address {address}
        ````
    - product_idx used to save product from stall / merchant. The command to add a product is:
        ````
        HMSET hmset product:{productId} name {name} description {description} price {price} photo {photo} stock {stock} rating {rating} stall {stall} category {category}
        ````
    - stall_idx used to save stall / merchant information. The command to add a stall is:
        ````
        HMSET stall:{stallId} name {name} description {description} yaw {yaw} pitch {pitch} scene_id {scene_id} rating {rating}
        ````

    We also use **redisJSON** in this redis instance together with hash. We use redisJSON to store user **cart** information. The json data is look like this:
    ````
    cart:{cartId}                       // this is the key

    {
        stall: {stall_id},              // stall id
        status: {status},               // 0/1 already paid or not
        notes: {notes from user},       // this is the notes from user to merchant if they want to costumize the order
        products: [{                    // array of product in the cart
            product_id: {produc_id),    // the pruduct id
            amount: {amount}            // the product amount
        }]
    }
    ````

    - set new cart. We use `JSON.SET` command to do this. Note: The `{payload}` is stringified first.
        ````
        JSON.SET cart:{id} $ {payload}
        ````
    - add product in the cart. We user `JSON.ARRAPPEND` to add product inside array. Note: The `{payload}` is stringified first.
        ````
        JSON.ARRAPPEND cart:{id} $.products {payload}
        ````
    - increase/decrease product amount in the cart. We use `JSON.NUMINCRBY` to increase / decrease the amount of product in the cart. the `{amount}` is positif integer if we want to increase, and negative integer if we want to decrease the item amount.
        ````
        JSON.NUMINCRBY cart:{id} '$.products[?(@.product_id=="{product_id}")].amount' {amount}
        ````
    - remove product from the cart. When the amount of product is 0, then we remove the product from the cart.
        ````
        JSON.DEL cart:{id} `$.products[?(@.product_id=="{product_id}")]'
        ````
    - remove cart. 
        ````
        JSON.DEL cart:{id}
        ````
    - set notes.
        ````
        JSON.SET cart:{id} $.notes '"{notes}"'
        ````

2. Redis for Streetview

    This the supporting database, this is used to save the data for 3D streetview. We use RedisJSON to store this data. We use Marzipano library to do the 3D Streetview. The data is look like this:
    ````
    streetview                               // This is the key

    {
        "scenes": [
            {3D metadata}                    // This is the marzipano scene metadata
        ],
        "name": {Project Title},             // This is the project title
        "settings": { marzipano setting }    // This us the marzipano setting
    }
    ````

    we use plain ``JSON.SET`` to store the data:
    ````
    JSON.SET streetview $ {data}
    ````

### How the data is accessed:

1. Redis for Marketplace
    - Login. We split the username (`example@gmail.com`) become 2 varibale: user: `example` & mail: `gmail.com`. We search the user and compare the hashed password using `bycrypt`.
        ````
        FT.SEARCH user_idx '@user:"{user}" @mail:"{mail}"'
        ````
    - Search Product & Advance Search. We give different weight on product description & product name.
        ````
        FT.SEARCH product_idx '(@name:"potato") => { $weight: 5.0; }|(@description:"potato") => { $weight: 2.0; }'
        
        FT.SEARCH product_idx '(@name:"potato" @price:[5000 9000]) => { $weight: 5.0; }|(@description:"potato" @price:[5000 9000]) => { $weight: 2.0; }'
        
        FT.SEARCH product_idx '(@name:"potato" @price:[5000 9000] @category:{snack|salty}) => { $weight: 5.0; }|(@description:"potato" @price:[5000 9000] @category:{snack|salty}) => { $weight: 2.0; }'
        ````
    - Search Product by Stall Id. To show all product in specifict stall / merchant
        ````
        FT.SEARCH product_idx @stall:{ {stall_id} }
        ````
    - Search Product bu Id.
        ````
        HGETALL product:{id}
        ````
    - Select Stall by Id.
        ````
        HGETALL stall:{id}
        ````
    - Query All Stall
        ````
        FT.SEARCH stall_idx *
        ````
    - Get Cart
        ````
        JSON.GET cart:{id}
        ````

2. Redis for Streetview
    - Get Streetview Metadata
        ````
        JSON.GET streetview
        ````

## How to run it locally?

[Make sure you test this with a fresh clone of your repo, these instructions will be used to judge your app.]

### Prerequisites

- Docker 20.10
- Internet Connection

### Local installation (Frontend Only)

Clone our repository
```
git clone https://github.com/facsiaginsa/gazmin-streetfood.git
```

Go to `frontend` folder
```
cd gazmin-streetfood/frontend
```

Build the image
```
docker build -t gazmin .
```

Run the Docker image
```
docker run -p 8080:8080 -e PORT=8080 -d gazmin
```

Note: This setup will only deploy the frontend and use the backend on our cloud (GCP)

### Local installation (All System)

## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Google Cloud Run

#### Deploy Frontend:

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?dir=frontend)

By default, the frontend will user this UR:
- "https://gazmin-marketplace.facsiaginsa.com" as marketplace backend URL
- "https://gazmin-streetview.facsiaginsa.com" as streetview backend URL
- "https://gazmin-minio.facsiaginsa.com" as minio URL

if you want to change them, fork this repo and then make change on ``frontend/public/js/data.js``. 

#### Deploy Marketplace:

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?dir=marketplace)

You will get an error like this
```
[ ✖ ] Failed deploying the application to Cloud Run.
Error: reason=HealthCheckContainerError message=The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable. Logs for this revision might contain more information.
```

That's ok, go to your cloud run console, click on the marketplace instance, create some ``env`` on your cloud run instance. Read ``marketplace/env.example`` for the required env. After that, redeploy the instance.

#### Deploy Streetview

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?dir=streetview)

You will get an error like this
```
[ ✖ ] Failed deploying the application to Cloud Run.
Error: reason=HealthCheckContainerError message=The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable. Logs for this revision might contain more information.
```

That's ok, go to your cloud run console, click on the marketplace instance, create some ``env`` on your cloud run instance. Read ``streetview/env.example`` for the required env. After that, redeploy the instance.

Note that you must also provide **REDIS & MINIO** beside Google Cloud Run to make this app works.