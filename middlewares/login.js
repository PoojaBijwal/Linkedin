const jwt = require("jsonwebtoken")

const {registrationModel} = require("../model/user.model")

const requiredLogin = (req,res, next) =>{
    const {authorization} = req.headers;
    if(!authorization)
    {
        return req.status(401).json({error:"Not Authorized"})
    }
    else{
        const token = authorization.replace("Bearer","")
        jwt.verify(token,"linkedin",(err, data)=>{
            if(err)
            {
                console.log(err)
                res.send({error:"You must have loged in"})
            }
            else{
                const  {_id} = data;
                registrationModel.findById(_id).then(userData=>{
                    req.user  = userData;
                    next()
                
                });
            }  
        })
    }
}

module.exports = {
    requiredLogin
}