import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./database/DB.js";

// 1. Force dotenv to load immediately before ANY other code runs
dotenv.config({
    path: "./.env"
});

const app = express();
const PORT = process.env.PORT || 8000;


ConnectDB()
.then(() => {
    
    app.listen(PORT, () => {
        console.log(`⚙️  Server is running smoothly at port : ${PORT}`);
    });
    
    app.on("error", (error) => {
        console.log("Express Server Error: ", error);
        throw error;
    });
})
.catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
});