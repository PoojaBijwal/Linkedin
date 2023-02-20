const bcrypt = require("bcrypt");
const {registrationModel} = require("../model/user.model")
const jwt = require("jsonwebtoken")

//Registration
const Register = (req,res)=>{
    const {name,email,gender,password,age,city} = req.body;
    bcrypt.hash(password,5,(err,secured_password)=>{
        if(err){
            console.log(err)
        }
        else{
            try {
               const userData = registrationModel({name,email,gender,password:secured_password,age,city}) 
               userData.save()
               console.log("Successfully registered");
               res.send({"msg":"Successfully registered"})
            } catch (error) {
               console.log(`error:${error}`) 
               res.send(error.message)
            }
        }
    })
}

//Login 

const Login = (req,res)=>{
    registrationModel.find({email}).then(userData=>{
        if(!userData)
        {
            res.send({error:"You are not registered"})
        }
        else{
            bcrypt.compare(password.userdata[0].password,(err, matched_password)=>{
                if(!matched_password)
                {
                    console.log(err)
                    res.send({"msg":"Password is not matching"})
                }
                else{
                    const token = jwt.sign(password,"linkedin")
                    res.send({"msg":"Successsfully logged in", token})
                    console.log("Successsfully logged in")
                }
            })
        }
    })
}

module.exports = {
Register, Login
}