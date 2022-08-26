'use strict';

$(document).ready(() => {

    // Login Function
    $('#login-button').on('click', (e) => {
        e.preventDefault();

        $.ajax({
            url: window.MARKETPLACE_URL + '/user/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: $('#email').val(),
                password: $('#password').val()
            }),
            success: (response) => {
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
        });
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
            success: (response) => {
                if (response.code === 0) {
                    window.location.href = '/login?message="' + response.message + '"'
                }

                if (response.code != 0) {
                    // give message to user --> response.message
                    console.log(response)
                }
            }
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
        let searchDelay = 400; // in miliseconds

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
                                $.each(response.data, displaySearchResult)
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

        //Add <li> dom for each search result
        function displaySearchResult(index, product) {

            $('#search + .search-results').append(
                '<div><img src="' + product.photo + '" class="thumbnail"><div><span class="product-name">'
                + product.name + '</span><span class="product-stall">' + product.stall.name + '</span></div><div class="next-arrow"></div></div>'
            );

            console.log('Showing ' + product.name)
            /* 
                available object:
                product.name
                product.description
                product.id
                product.stall
                product.photo
                product.rating
                product.category
                product.price
                product.stock
            */
        }
    }
})