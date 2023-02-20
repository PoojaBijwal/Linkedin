const mongoose = require("mongoose");

 const linkedinPostSchema = mongoose.Schema({
 "title": String,
 "body" : String,
 "device": String,
 "no_if_comments": Number
 })

 const LinkedinPostModel = mongoose.model("post", linkedinPostSchema)

 module.exports = {
    LinkedinPostModel
 }