require("dotenv").config()
const express=require("express");
const connectToDB=require("./database/db");
const bookroutes=require("./routes/book-routes")
const app=express();
const PORT=process.env.PORT  || 3003;

connectToDB();

//middleware
app.use(express.json());

//routes
app.use("/api/books",bookroutes)

app.listen(PORT,()=>{
    console.log(`Server is  running on port ${PORT}`);
});
