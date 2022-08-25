'use strict';

function callModal(content) {
    function modalOpener(target, auth) {
        if (auth) {
            $('#modal-content').addClass('auth');
        } else {
            $('#modal-content').removeClass('auth');
        }

        $.ajax({
            url: target,
            type: 'GET',
            success: function (response) {
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
    }
};

$('#nav-cart').on('click', () => {
    callModal('checkout');
});

$('#nav-user').on('click', () => {
    callModal('user');
});
