var isLoggedIn = false;
var version = '1.0.8';

var userName = sessionStorage.getItem("username");


if (sessionStorage.getItem("username") != undefined) {
    document.getElementById("loginLink").innerHTML = sessionStorage.getItem("username");
    document.getElementById("loginLink").setAttribute('href', 'html/user.html')

    document.getElementById("cart").classList.remove("cartDis")

}

function version() {
    console.log(version)
}