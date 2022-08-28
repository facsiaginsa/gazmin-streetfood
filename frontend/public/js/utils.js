'use strict';

function modalOpener(target, params) {
    if (target == 'login.html' || target == 'register.html') {
        $('#modal-content').addClass('auth');
        $('#modal-container').on('click', () => {
            callModal();
        });
    } else {
        $('#modal-content').removeClass('auth');
    }

    $.ajax({
        url: target,
        type: 'GET',
        success: (response) => {
            $('#modal-content').html(response);
            $('#modal-container').removeClass('hidden');

            if (target === "menu.html") {
                getStallMenu(params)
            }
        }
    });
}

function callModal(content, params) {

    switch (content) {
        case 'login':
            modalOpener('login.html');
            break;
        case 'register':
            modalOpener('register.html');
            break;
        case 'menu':
            modalOpener('menu.html', params);
            break;
        case 'cart':
            modalOpener('cart.html');
            break;
        case 'checkout':
            modalOpener('checkout.html');
            break;
        case 'user':
            modalOpener('user.html');
            break;
        default:
            $('#modal-content').removeClass('auth');
            $('#modal-content').val('');
            $('#modal-container').addClass('hidden');
            $('#modal-container').unbind('click');
    }
};

//Add Dom for each search result
function displaySearchResult(index, product) {

    $('#search + .search-results').append(
        `<div onclick="goToSceneByStallId('`+ product.stall.id + `')">` + 
            '<img src="' + product.photo + '" class="thumbnail">' + 
            '<div>' +
                '<span class="product-name">' + product.name + '</span>' +
                '<span class="product-stall">' + product.stall.name + '</span>' +
            '</div>' +
            '<div class="next-arrow"></div>' +
        '</div>'
    );
}

function clearSearchResult() {
    $('#search + .search-results').empty()
    $('#search').val("")
}

// Display No search Result
function displayNoResult() {
    $('#search + .search-results').append(
        '<div>' + 
            '<div>' +
                '<span class="product-stall">Sorry, no result found.</span>' +
            '</div>' +
        '</div>'
    );
}

function showUserProfile() {
    $('#user-info').append(
        '<div>' +
            'name: ' + sessionStorage.getItem("name") +
        '</div>' +
        '<div>' +
            'email: ' + sessionStorage.getItem("email") +
        '</div>' +
        '<div>' +
            'address: ' + sessionStorage.getItem("address") +
        '</div>'
    );
}

function postRegister(response) {
    if (response.code === 0) {
        window.location.href = '/login?message="' + response.message + '"'
    }

    if (response.code != 0) {
        // give message to user --> response.message
        console.log(response)
    }
}

function goToSceneByStallId(stallId) {
    let sceneId
    let infohotspot

    for (let element in data.scenes ) {
        let foundHotspot = data.scenes[element].infoHotspots.find(function(hotspot) {
            return hotspot.stall.id == this
        }, stallId)
        
        if (foundHotspot) {
            infohotspot = foundHotspot
            sceneId = data.scenes[element].id.split("-")[0]
        }
    }

    switchScene(scenes[sceneId], infohotspot.yaw)
    clearSearchResult()
}

function getStallMenu(id) {
    $.ajax({
        url: MARKETPLACE_URL + "/product/stall/" + id,
        type: 'GET',
        success: (response) => {
            $.each(response.data, displayStallMenu)
        }
    });
}

function displayStallMenu(index, product) {

    /* Available field:
        product.name
        product.description
        product.amount
        product.rating
        product.id
        product.photo
        product.stock
        product.price
        product.category
        product.photo
        product.stall
    */

    $('#menu-content').append(
        '<div id='+ product.id +'>' +
            '<div>' +
                'name: ' + product.name +
            '</div>' +
            '<div>' +
                'description: ' + product.description +
            '</div>' +
            '<div>' +
                'price: ' + product.price +
            '</div>' +
            '<div>' +
                `<span onclick="addProductToCart('` + product.id + `', '`+ product.stall +`')"> <b>+</b> </span> /` +
                `<span onclick="removeProductFromCart('` + product.id + `')"> <b>-</b> </span>` +
            '</div>' +
        '</div>'
    );
}