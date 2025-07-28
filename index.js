const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
let methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log("Listening on port 8080");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req,res)=>{
 res.render("form.ejs");
});
app.post("/posts",(req,res)=>{
    
    let{username,content}=req.body;
    if(username,content!=""){
        let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
            
    }
    res.redirect("/posts/new");
     
});
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});
app.get("/posts/:id/edit", (req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{ 
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    let newcontent=req.body.content;
    post.content=newcontent;
    res.redirect("/posts");
 
});
app.delete("/posts/:id", (req,res)=>{
   let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id); 
    res.redirect("/posts");


});




let posts=[
    {
       id:uuidv4(),
       username:"Aryan",
       content:"I am Aryan"
    },
    {
       id:uuidv4(),
       username:"Rohan",
       content:"I am Rohan"
    },
    {
       id:uuidv4(),
       username:"Max",
       content:"I am Max"
    },
]