import mongoose from 'mongoose';


export const userScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})