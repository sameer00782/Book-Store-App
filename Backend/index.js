import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express()

import bookRoute from "./route/book.route.js"

app.use(cors());

dotenv.config();


const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connect to mongodb

try{
    mongoose.connect(URI,{
    // useNewUrlParser:true,
    // useUnifiedTopology: true
    });
    console.log("connected to MongoDB")
} catch (error) {
  console.log("Error:  ",error)
}


// Defining Routes

app.use("/book",bookRoute)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})