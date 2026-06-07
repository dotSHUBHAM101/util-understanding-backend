import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const ConnectDB = async () => {
    try {

        const connectionUrl = `${process.env.MONGODB_URI}/${DB_Name}`;
        
        console.log("🚀 Attempting connection to URL:", connectionUrl);

        const connectInstance = await mongoose.connect(connectionUrl);
        
        console.log(`✅ MONGODB connected !! db host : ${connectInstance.connection.host}`);
    } catch (error) {
        console.log('❌ MONGODB CONNECTION ERROR : ', error);
        process.exit(1);
    }
}

export default ConnectDB;