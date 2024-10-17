import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        oderNumber : {
            type : String,
            required : true,
            unique : true
        },
        orderItem : [orderItemSchema],
        shipingAdress : {
            type: {
                name: String,
                address : String,
                city : String,
                state: String,
                zip: String,
                country: String
            }
        },
        subTotal : {
            type : Number,
            required : true
        },
        tax : {
            type : Number,
            required : true
        },
        shipingCost : {
            type : Number,
            required : true
        },
        total : {
            type : Number,
            required : true
        },
        paymentMethod : {
            type : String,
            required : true
        },
        paymentStatus : {
            type : String,
            enum : ['pending', 'paid', 'failed'],
            default : "pending"
        },
        orderStatus : {
            type : String,
            enum : ['pending', 'shipped', 'delivered', 'cancelled'],
            default : 'pending'
        }
    },
    {timestamps : true}
)

export const Order = mongoose.model('Order', orderSchema)