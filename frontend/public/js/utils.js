$(document).ready(function() {
    $('#login-button').on('click', (e) => {
        e.preventDefault();
    
        $.ajax({
            url: window.MARKETPLACE_URL + "/user/login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                username: $('#email').val(),
                password: $('#password').val()
            }),
            success: function(response) {
                if (response.code === 0) {
                    sessionStorage.setItem("name", response.userData.name)
                    sessionStorage.setItem("token", response.userData.token)
                    sessionStorage.setItem("address", response.userData.address)
                    sessionStorage.setItem("email", response.userData.username)
                    sessionStorage.setItem("id", response.userData.user_id)

                    window.location.href = "/?message='" + response.message + "'"
                }

                if (response.code != 0) {
                    // give message to user --> response.message
                }
            }
        });
    });

    $('#register-button').on('click', (e) => {
        e.preventDefault();
    
        $.ajax({
            url: window.MARKETPLACE_URL + "/user/register",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                username: $('#email').val(),
                password: $('#password').val(),
                name: $('#name').val(),
                address: $('#address').val()
            }),
            success: function(response) {
                if (response.code === 0) {
                    window.location.href = "/login?message='" + response.message + "'"
                }

                if (response.code != 0) {
                    // give message to user --> response.message
                    console.log(response)
                }
            }
        });
    });

    $('#logout-button').on('click', (e) => {
        e.preventDefault();

        sessionStorage.clear();
    });

    $('#to-login').on('click', (e) => {
        e.preventDefault();
        $('#modal-container').load('login.html');
    });

    $('#to-register').on('click', (e) => {
        e.preventDefault();
        $('#modal-container').load('register.html');
    });
})