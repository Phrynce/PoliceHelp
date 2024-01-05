const express=require('express');
const users=require('../data/users')
const router=express.Router()

router.route('/:id')
.put(async (req,res)=>{
  try{
    const {fname,mail}=req.body
    const {id}=req.params

    const task=await users.findOneAndUpdate({_id:id},{
        firstname:fname,
        email:mail
    },
    {new:true}
    )

    if(!task) return res.status(400).json({"message":"id not found"})

    res.status(200).json({"message":"updated successfully"})

  }catch(err){
    return res.status(401).send({err})
  }
})
module.exports=router;