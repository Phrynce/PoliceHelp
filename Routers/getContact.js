const express=require('express');
const router=express.Router();
const users=require('../data/users')


router.route('/:id')
.get(async (req,res)=>{
    try{
        const {id}=req.params
       const members=await users.findOne({_id:id})
       res.json(members)
    }catch(err){
        res.status(400).json({"message":err})
    }
})

module.exports=router;