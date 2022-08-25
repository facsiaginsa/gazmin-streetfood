'use strict';

function callModal(content, params) {
    switch (content) {
        case 'login':
            $('#modal-container').addClass('auth');
            $('#modal-container').removeClass('hidden');
            $('#modal-container').load('login.html');
            break;
        case 'register':
            $('#modal-container').addClass('auth');
            $('#modal-container').removeClass('hidden');
            $('#modal-container').load('register.html');
            break;
        case 'search':
            $('#modal-container').removeClass('auth');
            $('#modal-container').removeClass('hidden');
            $('#modal-container').load('search.html');
            break;
        case 'menu':
            $('#modal-container').removeClass('auth');
            $('#modal-container').removeClass('hidden');
            $('#modal-container').load('menu.html');
            showMenu(params)
            break;
        case 'checkout':
            $('#modal-container').removeClass('auth');
            $('#modal-container').removeClass('hidden');
            $('#modal-container').load('checkout.html');
            break;
        default:
            $('#modal-container').removeClass('auth');
            $('#modal-container').addClass('hidden');
            $('#modal-container').val('');
    }
};
