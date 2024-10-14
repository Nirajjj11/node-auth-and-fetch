import mongoose from "mongoose";

export const connectDB= async(url)=> {
    try{
        await mongoose.connect(url)
        return console.log("MongoDB connected")
    }
    catch(err){
        return console.log("mongoDB Error : ",err)
    }
}