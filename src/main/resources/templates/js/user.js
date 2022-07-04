let token = ""
let id = ""

function showLoginForm() {
    if (token == "") {
        $("#modalLoginForm").modal('show');
    }
}

function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let user = {
        username : username,
        password : password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/login",
        data: JSON.stringify(user),
        success: function (data) {
            token = data.accessToken
            id = data.id
            showUserPage()
            let notification = "Successful login."
            document.getElementById("notification").innerHTML = notification
            $('#modalLoginForm').modal('hide');
            $("#myModal").modal('show');
            setTimeout(function () {
                $("#myModal").modal('hide');
            }, 1000);
        },
        error: function (error) {
            console.log(error)
        },
    })
}

function register() {
    let username = document.getElementById("orangeForm-name").value
    let password = document.getElementById("passwordRe").value
    let confirmPassword = document.getElementById("confirmPassword").value
    let user = {
        username : username,
        password : password,
        confirmPassword : confirmPassword
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8000/register",
        data: JSON.stringify(user),
        success: function () {
            let notification = "Your POST has been created successfully."
            document.getElementById("notification").innerHTML = notification
            $('#exampleModal').modal('hide');
            $("#myModal").modal('show');
            setTimeout(function () {
                $("#myModal").modal('hide');
            }, 1000);
            $("#modalLoginForm").modal('show');
        },
        error: function (error) {
            console.log(error)
        },
    })
}



