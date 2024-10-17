import mongoose from 'mongoose'

const subTodos = new mongoose.Schema(
  {
    content : {
      type : String,
      required : true,
    },
    complete : {
      type : boolean,
      default : false,
    },
    createBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    }
  },
  {timestamps : true}
  )

export const SubTodos = mongoose.model("SubTodos", subTodos)