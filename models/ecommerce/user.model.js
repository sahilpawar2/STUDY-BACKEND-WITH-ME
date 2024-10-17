import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type : String,
            required : true,
            unique : true,
        },
        location :{
            type : String,
            required : true,
        },
        order : {
            type : mongoose.Schema.Types.OderId,
            res : "Oder"
        }
    },
    {timestamps : true}
)

export const User = mongoose.model('User', userSchema);