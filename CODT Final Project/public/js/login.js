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

function register() {
    var registerUser = new XMLHttpRequest();
    registerUser.open('POST', register_url, true);
    // var today = new Date();
    // var eighteen = false;

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var regUserName = document.getElementById("regUserName").value;
    var regEmail = document.getElementById("regEmail").value;
    var regPassword = document.getElementById("regPass").value;
    var DOB = document.getElementById("DOB");

    // var eighteenYearsAgo = moment().subtract(18, "years");
    // var birthday = moment(DOB);

    // if (!birthday.isValid()) {
    //     return "invalid date";
    // }
    // else if (eighteenYearsAgo.isAfter(birthday)) {
    //     eighteen = true;
    // }
    // else {
    //     return "sorry, no";
    // }

    // "firstName": fName,
    // "lastName":lName,
    // "email": regEmail,
    // "dateCreated":today,
    // "DOB":DOB
    var registerData = {
        "username": regUserName,
        "password": regPassword
    }

    // if (password == retype && eighteen) {
    //     console.log("its the same");

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
    // else {
    //     alert("Your password does not match");
    // }
    
