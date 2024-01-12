const express=require('express')
const router=express.Router()
const users=require('../data/users')


router.route('/')
.get(async (req,res)=>{
    try{
        const Allmembers=await users.find()
        res.status(200).json(Allmembers)
    }catch(err){
        res.status(403).json(err)
    }
    
})

module.exports=router