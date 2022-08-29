'use strict';

function modalOpener(target, params) {
    if (target == 'login.html' || target == 'register.html') {
        $('body').addClass('auth');
        $('body').on('click', "#modal-container", () => {
            callModal();
        });
    } else {
        $('body').removeClass('auth');
    }

    $.ajax({
        url: target,
        type: 'GET',
        success: (response) => {
            $('#modal-content').html(response);
            $('#modal-container').removeClass('hidden');

            if (target === 'menu.html') {
                console.log('call ' + params)
                getStallDetail(params)
                getStallMenu(params)
            }
        }
    });
}

function callModal(content, params) {
    if (content) {
        let target = content + '.html';
        modalOpener(target, params)
    } else {
        $('#modal-content').removeClass('auth');
        $('#modal-content').val('');
        $('#modal-container').addClass('hidden');
        $('#modal-container').unbind('click');
    }
};

//Add Dom for each search result
function displaySearchResult(index, product) {

    console.log("product", product)

    //$('#search + .search-results').append(
    $('#search + .search-results').append(
        `<div onclick="goToSceneByStallId('` + product.stall.id + `')">` +
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
    $('#search + .search-results').empty();
    $('#search').val('')
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
        'name: ' + sessionStorage.getItem('name') +
        '</div>' +
        '<div>' +
        'email: ' + sessionStorage.getItem('email') +
        '</div>' +
        '<div>' +
        'address: ' + sessionStorage.getItem('address') +
        '</div>'
    );
}

function goToSceneByStallId(stallId) {
    let sceneId
    let infohotspot

    for (let element in data.scenes) {
        let foundHotspot = data.scenes[element].infoHotspots.find(function (hotspot) {
            return hotspot.stall.id == this
        }, stallId)

        if (foundHotspot) {
            infohotspot = foundHotspot
            sceneId = data.scenes[element].id.split('-')[0]
        }
    }

    switchScene(scenes[sceneId], infohotspot.yaw)
    clearSearchResult()
}

function getStallDetail(id) {
    $.ajax({
        url: MARKETPLACE_URL + '/stall/' + id,
        type: 'GET',
        success: (response) => {
            displayStallDetail(response)
        }
    });
}

function getStallMenu(id) {
    $.ajax({
        url: MARKETPLACE_URL + '/product/stall/' + id,
        type: 'GET',
        success: (response) => {
            if (response.code === 0) {
                $.each(response.data, displayStallMenu)
            }

            if (response.code === 1) {
                displayNoStallMenu(response.message)
            }
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
        '<div class="menu-product-list">' +
        '<img src=' + product.photo + '>' +
        '<div>' +
        '<div id=' + product.id + '>' +
        '<div class="menu-product-name">' +
        product.name +
        '</div>' +
        '<div class="menu-product-description">' +
        product.description +
        '</div>' +
        '<div class="menu-product-buy">' +
        '<span>Rp ' + product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ',-</span>' +
        '<div class="menu-product-cart">' +
        `<span class="button" onclick="removeProductFromCart('` + product.id + `')"> <b>-</b> </span>` +
        `<span id="counter-` + product.id + `">` + (sessionStorage.getItem("counter-" + product.id) ?? 0) + `</span> ` +
        `<span class="button" onclick="addProductToCart('` + product.id + `', '` + product.stall + `')"> <b>+</b> </span>` +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}

function displayNoStallMenu(message) {
    $('#menu-content').append(
        '<div>' +
        message +
        '</div>'
    )
}

function displayStallDetail(stall) {
    console.log('set stall name')
    $('#merchant-name').html(stall.name)
}

$('#search').on('input', () => {
    if ($('#search').val() != '') {
        $('#search-filters').removeClass('hidden');
    } else {
        $('#search-filters').addClass('hidden');
    }
});

$('#minimum-price').on('change paste keyup', () => {
    if ($('#minimum-price').val() >= 1) {
        $('#maximum-price').attr('min', $('#minimum-price').val());
    } else {
        $('#maximum-price').attr('min', 0);
    }
});

$('#maximum-price').on('change paste keyup', () => {
    if ($('#maximum-price').val() >= 1) {
        $('#minimum-price').attr('max', $('#maximum-price').val());
    } else {
        $('#minimum-price').removeAttr('max');
    }
});