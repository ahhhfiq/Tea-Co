"use strict";


var apiKey = "AIzaSyAUdXwjgnH2uLObq5DncPne8qX-5by5I2c";

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
