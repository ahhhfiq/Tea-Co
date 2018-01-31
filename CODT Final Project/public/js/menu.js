category = "Drinks";
menu_url = "/menu";
menu_array = [];

function getMenuData() {
    var request = new XMLHttpRequest();
    request.open('GET', menu_url, true);

    request.onload = function () {
        menu_array = JSON.parse(request.responseText);
        console.log(menu_array);

        displayMenu(category);
        // fetchComments();
    };
    request.send();
}

function displayMenu(category) {
    var table = document.getElementById("menuTable");
    console.log(table)
    var menuCount = 0;

    table.innerHTML = "";
    totalMenu = menu_array.length;

    for (var count = 0; count < totalMenu; count++) {
        if (menu_array[count].category === category) {

            var image = "https://ahhhfiq.github.io/images/" + menu_array[count].productImage;
            var title = menu_array[count].name;


            var cell = '<div class="col-sm">\
                            <div class="responsive">\
                                <a href="#" onclick="menuModal('+count+')" >\
                                    <div class="gallery">\
                                        <img class="img-fluid" src=" '+ image + ' " alt="'+ title +'">\
                                        <div class="desc">'+ title + '</div>\
                                    </div>\
                                </a>\
                            </div>\
                        </div>';
            table.insertAdjacentHTML('beforeend', cell);
            menuCount++;
        }
    }
}

function menuModal(item) {
    document.getElementById("menuTitle").innerHTML = menu_array[item].category;
    document.getElementById("menuImage").src = "https://ahhhfiq.github.io/images/" + menu_array[item].productImage;
    document.getElementById("productName").innerHTML = menu_array[item].name;
    document.getElementById("desc").innerHTML = menu_array[item].desc;
    document.getElementById("price").innerHTML = menu_array[item].price;
    var menuModal = new Modal(document.getElementById("showMenu"));
    menuModal.show();
}


function foodSelect() {
    document.getElementById("food").classList.add("activate");
    document.getElementById("drinks").classList.remove("activate");
    document.getElementById("dessert").classList.remove("activate");

    category = "Food";
    displayMenu(category)
}
function drinkSelect() {
    document.getElementById("food").classList.remove("activate");
    document.getElementById("drinks").classList.add("activate");
    document.getElementById("dessert").classList.remove("activate");

    category = "Drinks";
    displayMenu(category)
}
function dessertSelect() {
    document.getElementById("food").classList.remove("activate");
    document.getElementById("drinks").classList.remove("activate");
    document.getElementById("dessert").classList.add("activate");

    category = "Desserts";
    displayMenu(category)
}

function search(){
   searchItems =  document.getElementById("searchBar").value;

   filter = searchItems.toUpperCase();

   items = table.menu_array.title;

   for(var i = 0; i <items.length; i++){
        
   }
}