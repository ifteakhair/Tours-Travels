import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'

dotenv.config()
const app =express()
const port = process.env.PORT || 8000

// app.get("/",(req,res)=>{
//     res.send("api is working");
// })
mongoose.set("strictQuery", false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('mongoDB connection OK')
    } catch(err){
        console.log('mondoDB database connection fail')
    }
}

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours',tourRoute)
app.use('/users',userRoute)

app.listen(port, ()=>{
    connect();
    console.log("server listening on port",port);
})