const express = require('express')
const bodyParser = require('body-parser')
const Post = require('./models/post')
const momngoose = require('mongoose')
const app = express();

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

app.post("/api/posts",(req,res,next)=>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then(createdPost => {
        res.status(201).json({
          message: "Post added successfully",
          postId: createdPost._id
        });
    })
})

app.put("/api/posts/:postId",(req,res,next)=> {
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content
    })
    Post.updateOne({_id: req.params.postId},post).then(result => {
        res.status(200).json({
            message: "post updated"
        })
    })
})

app.get("/api/posts",(req,res,next)=>{
    Post.find().then((documents)=>{
        res.status(200).json({
            message: 'post fetched successfully',
            posts: documents
        });
    })
});

app.get("/api/posts/:id",(req,res,next)=>{
    Post.findById(req.params.id).then(post=>{
        if(post){
            res.status(200).json(post)
        }else{
            res.status(404).json({message:'post not found'})
        }
    })
})

app.delete("/api/posts/:id",(req,res,next)=>{
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result)
        res.status(200).json({
            message: "post deleted"
        })
    })
})
module.exports = app