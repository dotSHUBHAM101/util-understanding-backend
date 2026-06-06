import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const ConnectDB = async () => {
  console.log("CHECKING STRINGS:", process.env.MONGODB_URI, DB_Name); 
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log(`MONGODB connected !! db host : ${connectInstance.connection.host}`);
  } catch (error) {
    console.log('MONGODB CONNECTION ERROR : ', error);
    process.exit(1);
  }
}

export default ConnectDB;