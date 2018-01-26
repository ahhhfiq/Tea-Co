var login_url = "/login";
var register_url = "/register";

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

function login() {
    var loginUser = new XMLHttpRequest();
    loginUser.open('POST', login_url, true);


    var userName = document.getElementById("userName").value;
    var logPassword = document.getElementById("password").value;

    var loginData = {
        "username": userName,
        "password": logPassword
    };

    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        var output = JSON.parse(loginUser.responseText);
        if (output.token) {
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("username", output.username);
            window.location.href = "/index.html";
        } else {
            alert(output.message);
        }
    };
    loginUser.send(JSON.stringify(loginData));

}

function checkPass() {

    var regPassword = document.getElementById("regPass");
    var rePass = document.getElementById("repass");

    if (rePass.value == regPassword.value) {
        alert("Password Match");
    }
    else{
        rePass.setCustomValidity("Password does not match");
    }
}

function register() {
    var registerUser = new XMLHttpRequest();
    registerUser.open('POST', register_url, true);
    

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var regUserName = document.getElementById("regUserName").value;
    var email = document.getElementById("regEmail").value;
    var regPassword = document.getElementById("regPass").value;
    var dateCreated = new Date();


    var registerData = {
        "firstName": firstName,
        "lastName": lastName,
        "username": regUserName,
        "password": regPassword,
        "email": email,
        "dateCreated": dateCreated
    }

    console.log(registerData)

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        var output = JSON.parse(registerUser.responseText);
        if (output.token) {
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("username", output.username);
            window.location.href = "/index.html";
        } else {
            alert(output.message);
        }
    };
    registerUser.send(JSON.stringify(registerData));
}
