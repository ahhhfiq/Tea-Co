if (sessionStorage.getItem("username") != undefined) {
    document.getElementById("loginLink2").innerHTML = sessionStorage.getItem("username")
    document.getElementById("loginLink2").setAttribute('href', 'user.html')

    document.getElementById("cart").classList.remove("cartDis")
}
function showTnC() {
    var TnCmodal = new Modal(document.getElementById("tncModal"));
    TnCmodal.show();
}