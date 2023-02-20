const mongoose = require("mongoose")

const RegistrationSchema = mongoose.Schema({
"name" : String,
"email": String,
"gender" :String,
"password" : String,
"age": Number,
"city": String
})


const registrationModel = mongoose.model("user", RegistrationSchema);

module.exports = {
    registrationModel
}