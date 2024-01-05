const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const users=require('../data/users')
require('dotenv').config()

router.route('/')
.post(async (req,res)=>{
    const {username,pword}=req.body;
    if(!username ||!pword ) return res.json({"message":"username and password requird"})
    
    const member=await users.findOne({email:username}).exec();
    if(!member) return res.json({"message":"user does not exist"})

    const match=await bcrypt.compare(pword,member.password);
    if(match){
        try{
            const accessToken=jwt.sign({
                username:member.email,
                role:member.role
            },
            process.env.ACCESS_TOKEN,
            {expiresIn:'60s'}
            )
            const result=await member.save();
            console.log(result);

            res.cookie('jwt',accessToken,{httpOnly:true,maxAge:24*60*60*100,sameSite:'none',secure:true})
            res.json({"message":"success",accessToken,role:member.role,ID:member._id,name:member.firstname});
        }catch(err){
            res.json({"message":`there is an error of ${err.message}`})
        }
    }else{
        res.json({"message":"user does not exist"})
    }
})

module.exports=router;