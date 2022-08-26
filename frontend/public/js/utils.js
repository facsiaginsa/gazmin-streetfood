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
        '<div>' + 
            '<img src="' + product.photo + '" class="thumbnail">' + 
            '<div>' +
                '<span class="product-name">' + product.name + '</span>' +
                '<span class="product-stall">' + product.stall.name + '</span>' +
            '</div>' +
            '<div class="next-arrow"></div>' +
        '</div>'
    );
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

// Post Login Function
function postLogin(response) {
    if (response.code === 0) {
        sessionStorage.setItem('name', response.userData.name)
        sessionStorage.setItem('token', response.userData.token)
        sessionStorage.setItem('address', response.userData.address)
        sessionStorage.setItem('email', response.userData.username)
        sessionStorage.setItem('id', response.userData.user_id)

        window.location.href = '/?message="' + response.message + '"'
    }

    if (response.code != 0) {
        // give message to user --> response.message
    }
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

