const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const report=new Schema({
    name:{
        type:String,
        require:true,
    },
    incidence:{
        type:String,
        require:true,
    },
    details:{
        type:String,
        require:true,
    },
    number:{
        type:Number,
        require:true,
    },
    role:{
        type:String,
        default:"visitor"
    }
})
module.exports=mongoose.model('reportedCase',report)