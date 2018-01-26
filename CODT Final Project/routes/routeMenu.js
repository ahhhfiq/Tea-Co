"use strict"
const menuController = require('../controllers/menuController');

function routeMenu(app) {
    app.route('/menu').get(menuController.getAllMenu);
    .get()

}

module.exports = { routeMenu };