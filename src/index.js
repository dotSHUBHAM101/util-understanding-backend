import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./database/DB.js";

// 1. Load the environment variables
dotenv.config({
    path: "./.env"
});

const app = express();
const port = process.env.PORT || 8000;

// 2. Connect to the Database, then start the Express server
ConnectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server is running smoothly at port : ${port}`);
    });
})
.catch((err) => {
    console.log("⚠️ MONGO DB connection failed !!! ", err);
});
/*

;( async () => {

  try{

  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
  app.on("error", (error) => {
    console.log("ERRR : ", error);
    throw error 
  })
  app.listen(process.env.PORT , () => {
    console.log(`App is listening on port : ${process.env.PORT}`)
  })
  }

  catch (error){

      console.log("error : " , error)
  }
})()


*/