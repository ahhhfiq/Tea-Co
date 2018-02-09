"use strict"
var db = require('../dbconnection');
class CommentsDB {
    getAllComments(callback) {
        var sql = "SELECT * FROM comments";

        return db.query(sql, callback);
    }
    //************addComment **********************//
    addComment(comment, callback) {
        var sql = "INSERT INTO comments (commentID, username, comments, productID, rating) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [comment.commentID(), comment.username(), comment.comment(), comment.productID(), comment.rating()], callback);
    }
    //************updateComment **********************//
    updateComment(comment, callback) {
        var sql = "UPDATE comment SET comments = ?, username = ?, rating = ?, datePosted = ? WHERE commentID = ?";

        return db.query(sql, [comment.getComments(), comment.getUsername(), comment.getRating(), comment.getDatePosted(), comment.getId()], callback);
    }
    //************deleteComment **********************//
    deleteComment(id, callback) {
        var sql = "DELETE FROM comments WHERE commentID = ?";

        return db.query(sql, id, callback);
    }
}

module.exports = CommentsDB;