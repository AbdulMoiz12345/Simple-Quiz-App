const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.listen(8000,()=>{
    console.log("server is on");
 })
 mongoose.connect('mongodb://127.0.0.1:27017/MCQ', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
}).catch(error => {
    console.error("Database connection error:", error);
});

const messscheme = new mongoose.Schema({
        question: String,
        options: [String],
        answer:String
 });
 const message=mongoose.model("data",messscheme);
 app.post("/enter",async(req,res)=>{
    const data=req.body
    await message.insertMany(data);
 })
 app.get("/getdata", async (req, res) => {
    const Alldata = await message.find({}).exec(); // Await the query execution
    res.json(Alldata);
  });