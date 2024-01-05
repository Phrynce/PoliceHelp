const express=require('express')
const router=express.Router();


const database=[{
    name:'prince',
    location:'kasoa'
},
{
    name:'nyame',
    location:'kasoa'
},
{
    name:'kojo',
    location:'Takoradi'
}

]

router.route('/')
.get((req,res)=>{
    res.send(database)
})

module.exports=router;