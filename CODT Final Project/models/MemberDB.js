var db = require('../dbconnection');

class MemberDB{

    registerUser(user, callback){
        console.log("First Name: " + user.firstName);
        console.log("Last Name: " + user.lastName);        
        console.log("Username: "+ user.username);
        console.log("Password: "+user.password);
        console.log("Email: " + user.email);
        console.log("Date Created: " + user.dateCreated);
        var sql = "INSERT INTO user(firstName, lastName, username, password, email, dateCreated) VALUES (?, ?, ?, ?, ?,?)";
     
        db.query(sql, [user.firstName, user.lastName,user.username,user.password, user.email, user.dateCreated], callback);
    }
    loginUser(user, callback){
        var sql = "SELECT * FROM user WHERE username = ? AND password = ?"

        db.query(sql, [user.username, user.password], callback);
    }
}
module.exports = MemberDB;