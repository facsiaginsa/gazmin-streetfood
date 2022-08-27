'use strict';

function modalOpener(target, auth) {
    if (auth) {
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
        }
    });
}

function callModal(content) {

    switch (content) {
        case 'login':
            modalOpener('login.html', true);
            break;
        case 'register':
            modalOpener('register.html', true);
            break;
        case 'menu':
            modalOpener('menu.html', false);
            break;
        case 'cart':
            modalOpener('cart.html', false);
            break;
        case 'checkout':
            modalOpener('checkout.html', false);
            break;
        case 'user':
            modalOpener('user.html', false);
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
        `<div onclick="goToMenu('`+ product.id +`','` + product.stall.id + `')">` + 
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
                '<span class="product-stall">Sorry No Result for Your searfh</span>' +
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

function goToMenu(productId, stallId) {
    let sceneId
    let infohotspot

    for (let element in APP_DATA.scenes ) {
        let foundHotspot = APP_DATA.scenes[element].infoHotspots.find(function(hotspot) {
            return hotspot.stall.id == this
        }, stallId)
        
        if (foundHotspot) {
            infohotspot = foundHotspot
            sceneId = APP_DATA.scenes[element].id.split("-")[0]
        }
    }

    switchScene(scenes[sceneId], infohotspot.yaw)
    clearSearchResult()
}