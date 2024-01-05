const moongose=require('mongoose')
const Schema=moongose.Schema;

const userSchema=new Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        user:{
            type:String,
            default:'visiter'
        },
        editor:Number,
        adimin:Number
    }
})

module.exports=moongose.model('members',userSchema)