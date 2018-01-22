category = "Drinks";

function getMenu() {
    var request = new XMLHttpRequest();
    request.open('GET',)

}

function foodSelect() {
    document.getElementById("food").classList.add("activate");
    document.getElementById("drinks").classList.remove("activate");
    document.getElementById("bnb").classList.remove("activate");

    category = "Food";
}
function drinkSelect() {
    document.getElementById("food").classList.remove("activate");
    document.getElementById("drinks").classList.add("activate");
    document.getElementById("bnb").classList.remove("activate");

    category = "Drinks";
}
function bnbSelect() {
    document.getElementById("food").classList.remove("activate");
    document.getElementById("drinks").classList.remove("activate");
    document.getElementById("bnb").classList.add("activate");

    category = "Bnb";
}
function showItems(category) {
    var table = document.getElementById("menuTable");
    var menuCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMenu = menuItems.length;

    for (var count = 0; count < totalMenu; count++) {

    }

}