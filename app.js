const express = require("express");
const res = require("express/lib/response");
const { threadId } = require("./db.js");
const db=require('./db.js')

const app=express()

// create db
app.get('/createdb', (req,res) =>{
    let sql= 'CREATE DATABASE my_db2';
    db.query(sql, (err,result)=>{
        if(err){
            throw err;
        }
        console.log(result)
        res.send('database created')
    })
})


// create table
app.get('/createTable', (req,res)=>{
    let sql='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
    db.query(sql, (err,result)=>{
        if(err){
            console.log(err)
        };
        console.log(result)
        res.send("Table created")
    })
})


// insert post
app.get('/addpost', (req,res)=>{
    let post={title:"Post two", body:"this is too body"}
    let sql='INSERT INTO posts SET ?'
    let query=db.query(sql,post,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send("Post added")
    })
})

// Select post
app.get('/getposts', (req,res)=>{
    let sql="SELECT * FROM posts"
    let query=db.query(sql,(err,results)=>{
        if(err){
            console.log(err)       
         }
            console.log(results)
            res.send("post fetched")
    }
    
    )
})


// Select by id
app.get('/getbyid/:id', (req,res)=>{
    let sql=`SELECT * FROM posts WHERE id= ${req.params.id}`;
    let query=db.query(sql, (err,result)=>{
        if(err){
            console.log(err)       
         }
            console.log(result)
            res.send("post fetched")
    })
})


// update post
app.get('/update/:id', (req,res)=>{
    let newtitle="Updated Title"
    let sql=`UPDATE posts SET title= '${newtitle}' WHERE id= ${req.params.id}`;
    let query=db.query(sql, (err,result)=>{
        if(err){
            console.log(err)       
         }
            console.log(result)
            res.send("post updated")
    })
})

// delete posts
app.get('/delete/:id', (req,res)=>{
    
    let sql=`DELETE FROM posts  WHERE id= ${req.params.id}`;
    let query=db.query(sql, (err,result)=>{
        if(err){
            console.log(err)       
         }
            console.log(result)
            res.send("post deleted")
    })
})

app.listen("3000", ()=>{
    console.log("server started")
})