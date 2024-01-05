const express=require('express')
const router=express.Router();
const users=require('../data/users');
const bcrypt=require('bcrypt');


router.route('/')
.post(async (req,res)=>{
    const {fname,lname,mail,pwd}=req.body;
    if(!fname || !lname || !mail || !pwd) return res.json({"message":"username and password requird"})
    const duplicate=await users.findOne({email:mail}).exec();
    if(duplicate) return res.json({"message":"user already exist"})
   

    try{
        
      const hashpwd=await bcrypt.hash(pwd,10)

        const newMembers=new users();
        newMembers.firstname=fname;
        newMembers.lastname=lname;
        newMembers.email=mail;
        newMembers.password=hashpwd;

        const result=await newMembers.save();
        console.log(result);
        res.json({"message":'created'})

    }catch(err){
        res.status(403).json({"message":`ther is an issue of ${err}` })
    }
})

module.exports=router;