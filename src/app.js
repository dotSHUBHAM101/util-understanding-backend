import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

app.use(cors({      //middleware 
  origin : process.env.CORS_ORIGIN,
  credentials : true
}))


app.use(express.json({limit : "15kb"})) // to limit json data

app.use(express.urlencoded({extended : true , limit : '15kb'})) // data url ke form aaae to ye configuration krna padega.

app.use(express.static("public"));                            //public assets koi bhi acces kr skta ye part

app.use(cookieParser()) // to get acces of cookies from users browser and to perform crud operation on them..



export default app;