# Gazmin Streetfood

Gazmin Streetfood is a 3 Dimention Marketplace for Indonesian Streetfood. The user will feel the experience of visiting the place while shopping. Right now, this app **is not working well with safari browser**, please use other browser instead such as Chrome.

![Gazmin Home Page](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin.png?raw=true)

![Gazmin Search Streetfood](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin-search.png?raw=true)

This is the Application Architecture:

![Gazmin Architecture](https://github.com/facsiaginsa/gazmin-streetfood/blob/main/gazmin-architecture.png?raw=true)

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

[Insert Run on Google button](https://cloud.google.com/blog/products/serverless/introducing-cloud-run-button-click-to-deploy-your-git-repos-to-google-cloud)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp