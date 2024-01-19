const express=require('express');
const router=express.Router();
const report=require('../data/report')

router.route('/')
.post(async (req,res)=>{
    const {reporterName,incidenceName,incidenceDetails,reporterNumber}=req.body;
    if(!reporterName || !incidenceName || !incidenceDetails || !reporterNumber) return res.status(200).json({'message':"contents are required for investigation"})
    try{

        const Issues=new report();
        Issues.name=reporterName;
        Issues.number=reporterNumber;
        Issues.incidence=incidenceName;
        Issues.details=incidenceDetails;

        const result=await Issues.save();
    
        console.log(result);
        res.status(200).json({"message":"Report sent"})

}catch(err){
    res.send(err)
    console.log(err);
}
})

module.exports=router