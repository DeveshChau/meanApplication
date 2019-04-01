const express = require('express')
const bodyParser = require('body-parser')
const app = express();


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

app.post("/api/posts",(req,res,next)=>{
    const post = req.body
    console.log(post)
    res.status(201).json({
        message: "new post added successfully"
    });
})

app.get("/api/posts",(req,res,next)=>{
    const posts = [
        {
            id: 'fsdf',
            title: 'fitst post',
            content: 'first post content'
        },
        {
            id: 'fsdf',
            title: 'second post',
            content: 'second post content'
        }
    ];
    res.status(200).json({
        message: 'post fetched successfully',
        posts: posts
    });
});

module.exports = app