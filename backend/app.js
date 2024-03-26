const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./routes/auth")
const list = require("./routes/list")
const cors = require("cors");

//All Constants
const PORT=process.env.PORT || 8000;
const MONGO_URI = `mongodb+srv://shubhamrapariya2:Shubh7769@cluster0.eqashp3.mongodb.net/todoDatabase`

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());   
app.use(cors()) 

//MongoDB Connection
const connection = async(req,res)=>{
    try {
        await mongoose
        .connect(MONGO_URI)
        .then(()=>{
            console.log("Connected to MongoDB")
            
        })
    } catch (error) {
        res.status(400).json({
            message:"Not Connected to DB",
            error: error,
        })
    }
}
connection();

app.get("/",(req,res)=>{
    return res.send("Welcome");
});


app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(PORT,()=>{
    console.log("server is running at :",PORT);
});