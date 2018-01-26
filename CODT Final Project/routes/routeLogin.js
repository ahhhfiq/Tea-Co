"use strict"

const memberController = require('../controllers/member');

function routeMember(app) {
    app.route('/register')
    .post(memberController.register)

    app.route('/login')
    .post(memberController.login)
}

module.exports =  { routeMember} ;

