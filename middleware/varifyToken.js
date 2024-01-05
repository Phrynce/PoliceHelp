const users=require('../data/users');
require('dotenv').config()
const jwt=require('jsonwebtoken')

const VarifyToken=(req,res,next)=>{
    const autHead=req.headers.Authorization || req.headers.authorization
    if(autHead && autHead.startsWith('Bearer')){ //res.sendStatus(401)
    console.log(autHead);
const token=autHead.split(' ')[1]

 jwt.verify(
    token,
    process.env.ACCESS_TOKEN,
    (err,decoded)=>{
        if(err) return res.json(err);
        req.user=decoded.user
        next();
    }
)
if(!token) return res.json({"message":"token not found"})
    }

}

module.exports=VarifyToken