 import mongoose from "mongoose";
import express from "express";
import  ToDo  from "./models/ToDo.js";


 let a = await mongoose.connect("mongodb://localhost:27017/todo")
 
 const app = express()
 const port = 3000

 app.get('/', (req, res) =>{
    const todo = new ToDo({title: "Hey first todo", desc: "Description of this todo", isDone: false})
    todo.save()
    res.send('ToDo schema mongoose practice')
 })

 app.listen(port,  ()=> {
    console.log(`Example app listening on port ${port}`)
 })
