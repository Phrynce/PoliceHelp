const path=require('path');
const port=process.env.port || 300
const express=require('express');
const app=express()
const mongoose=require('mongoose')
const cors=require('cors');
const cookie_parser=require('cookie-parser');
const VarifyToken=require('./middleware/varifyToken')
require('dotenv').config()

function connected(){
    try{
mongoose.connect(process.env.DB_TOKEN)
    }catch(err){
        console.log(err);
    }
}



connected()





app.use('/content',express.static(path.join(__dirname,'/public')));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//providing cross-origin source. making it to be accessible by my localhost
app.use(cors({
    origin:['https://easy-police-locate.onrender.com','https://api.ipgeolocation.io/ipgeo?apiKey=04b2bf1d45c44641a843467a6ed78469',],
    credentials:true,            
    optionSuccessStatus:200,
    methods:['GET','POST','PUT']
}))
app.use(cookie_parser())

app.use("/employee",require('./Routers/employee'))
app.use('/register',require('./Routers/resgister'))
app.use('/login',require('./Routers/login'))
app.use('/update',require('./Routers/update'))
app.use('/data',require('./Routers/getContact'))
app.use('/reports',require('./Routers/Issues'))
app.use('/reporters',require('./Routers/Reporters'))
app.use('/members',require('./Routers/Members'))

app.use(VarifyToken)
app.use("/content",require('./Routers/content'))

    console.log('connected to mongodb');
    app.listen(port,console.log(` server is running on port ${port}`))



