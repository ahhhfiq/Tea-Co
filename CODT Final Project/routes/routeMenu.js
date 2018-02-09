"use strict"
const menuController = require('../controllers/menuController');

function routeMenu(app) {
    app.route('/menu')
    .get(menuController.getAllMenu);

}

module.exports = { routeMenu };