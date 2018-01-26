var db = require('../dbconnection');

class MemberDB{

    registerUser(user, callback){
        console.log("Username: "+ user.username);
        console.log("Password: "+user.password);
        var sql = "INSERT INTO user(username, password) VALUES (?, ?)";
     
        db.query(sql, [user.username,user.password], callback);
    }
    loginUser(user, callback){
        var sql = "SELECT * FROM user WHERE username = ? AND password = ?"

        db.query(sql, [user.username, user.password], callback);
    }
}
module.exports = MemberDB;