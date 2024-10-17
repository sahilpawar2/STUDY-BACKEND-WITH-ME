import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            tname: String,
            address : String,
            city : String,
            state: String,
            zip: String,
            country: String
        },
        phone: {
            type: String,
            required: true
        },
        departments: [{
            name: {
              type: String,
              required: true
            },
            head: {
              type: String,
              required: true
            }
        }]
    },
    {timestamps : true})

export const Hospital = mongoose.model('Hospital', hospitalSchema)