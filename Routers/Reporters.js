const express=require('express')
const router=express.Router()
const users=require('../data/report')


router.route('/')
.get(async (req,res)=>{
    try{
        const Allreporters=await users.find()
        res.status(200).json(Allreporters)
    }catch(err){
        res.status(403).json(err)
    }
    
})

module.exports=router