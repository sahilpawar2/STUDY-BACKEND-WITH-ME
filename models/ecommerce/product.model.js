import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          unique: true
        },
        description: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true,
          min: 0
        },
        category: {
          type: String,
          required: true
        },
        stock: {
          type: Number,
          required: true,
          min: 0
        },
        imageUrl: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now
        },
        updatedAt: {
          type: Date,
          default: Date.now
        }
    },
    {timestamps : true}
)

export const Product = mongoose.model('Product', productSchema)