const express = require('express')
const bodyParser = require('body-parser')
const momngoose = require('mongoose')
const app = express();
const postsRoutes = require('./routes/posts')

momngoose.connect('mongodb+srv://devesh:7XQ9yzx8Pudn6zpv@cluster0-1kync.mongodb.net/node-angular?retryWrites=true')
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("connection failed")
})

//7XQ9yzx8Pudn6zpv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-ith, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods',
    "GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();   
})

app.use("/api/posts",postsRoutes)
module.exports = app