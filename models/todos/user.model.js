import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
{
  username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
  },
  email : {
    type : String,
    unique : true,
    required : true,
  },
  password : {
    type : String,
    required : [true, "password is require"],
  }
}, {timestamps : true}
)

export const User = mongoose.model('User', userSchema)