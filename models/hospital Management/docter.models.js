import mongoose from "mongoose";

const docterSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        specialty: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        yearsOfExperience: {
            type: Number,
            required: true
        },
        department: {
            type: String,
            required: true
        },
    },
    {timestamps : true})

export const Docter = mongoose.model('Docter', docterSchema)