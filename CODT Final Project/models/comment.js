//***** Comment Class ************//

"use strict";

class Comment {
    constructor(commentID, productID, product, comments, username, rating, time) { this.commentID = commentID; this.productID = productID; this.product = product; this.comments = comments; this.username = username; this.rating = rating; this.time = time; }
    getCommentID() { return this.commentID; }
    getproductID() { return this.productID; }
    getproduct() { return this.product; }
    getReview() { return this.comments; }
    getUsername() { return this.username; }
    getRating() { return this.rating; }
    gettime() { return this.time; }
    setproductID(productID) { this.productID = productID; }
    setproduct(product) { this.product = product; }
    setReview(comments) { this.comments = comments; }
    setUsername(username) { this.username = username; }
    setRating(rating) { this.rating = rating; }
    settime(time) { this.time = time; }
}
module.exports = Comment;