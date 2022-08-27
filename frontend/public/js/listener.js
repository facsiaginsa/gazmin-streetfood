'use strict';

$(document).ready(() => {
    $('#nav-cart').on('click', () => {
        callModal('cart');
    });
    
    $('#nav-user').on('click', () => {
        callModal('user');
    });

    $('#close-modal').on('click', () => {
        callModal();
    });

    // Register Function
    $('#register-button').on('click', (e) => {
        e.preventDefault();

        $.ajax({
            url: window.MARKETPLACE_URL + '/user/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: $('#email').val(),
                password: $('#password').val(),
                name: $('#name').val(),
                address: $('#address').val()
            }),
            success: postRegister
        });
    });

    // Logout Function
    $('#logout-button').on('click', (e) => {
        e.preventDefault();
        sessionStorage.clear();
    });

    // Search function
    {
        let typingTimer // timer object
        let searchDelay = 250; // in miliseconds

        //On keyup, start the countdown delay
        $('#search').on('change paste keyup', () => {
            clearTimeout(typingTimer);

            if (!$('#search').val()) {
                $('#search + .search-results').empty();
            }

            typingTimer = setTimeout(() => {
                let word = $('#search').val()
                // console.log(window.MARKETPLACE_URL + '/product?word="' + word + '"')

                if ($('#search').val()) {
                    $.ajax({
                        url: window.MARKETPLACE_URL + '/product?word=' + word,
                        type: 'GET',
                        contentType: 'application/json',
                        success: (response) => {
                            $('#search + .search-results').empty();

                            if (response.code === 0) {
                                if (response.count > 0) {
                                    $.each(response.data, displaySearchResult)
                                } else {
                                    displayNoResult()
                                }
                                
                            }

                            if (response.code != 0) {
                                console.log(response.data)
                            }
                        }
                    });
                }
            }, searchDelay);
        });

        //on keydown, clear the countdown 
        $('#search').on('keydown', () => {
            clearTimeout(typingTimer);
        });
    }
})