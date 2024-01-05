const express=require('express');
const path=require('path')
const router=express.Router();
const varifyToken=require('../middleware/varifyToken')

router.route('/')
.get((req,res)=>{
    res.json({"message":"Everything is working"})
})


module.exports=router;

