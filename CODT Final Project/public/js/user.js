if (sessionStorage.getItem("token") == null) {
    location.href = "login.html"
}

function logout() {
    sessionStorage.clear();
    window.location.href = "/index.html";
}