'use strict';

function callModal(content) {
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

$('#nav-cart').on('click', () => {
    callModal('register');
});

$('#nav-user').on('click', () => {
    callModal('user');
});
