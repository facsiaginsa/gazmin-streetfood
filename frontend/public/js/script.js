'use strict';

function callModal(content) {
    switch (content) {
        case 'login':
            $('#modal-content').addClass('auth');
            $('#modal-content').load('login.html');
            $('#modal-container').removeClass('hidden');
            break;
        case 'register':
            $('#modal-content').addClass('auth');
            $('#modal-content').load('register.html');
            $('#modal-container').removeClass('hidden');
            break;
        case 'menu':
            $('#modal-content').removeClass('auth');
            $('#modal-content').load('menu.html');
            $('#modal-container').removeClass('hidden');
            break;
        case 'checkout':
            $('#modal-content').removeClass('auth');
            $('#modal-content').load('checkout.html');
            $('#modal-container').removeClass('hidden');
            break;
        default:
            $('#modal-content').removeClass('auth');
            $('#modal-content').val('');
            $('#modal-container').addClass('hidden');
    }
};
