"use strict"
var db = require('../dbconnection');
class MenuDB {
    getAllMenu(callback) {
        var sql = "SELECT * FROM products";

        return db.query(sql, callback);
    }
}
module.exports = MenuDB;