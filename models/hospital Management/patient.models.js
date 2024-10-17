import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        medicalHistory: [{
            condition: {
              type: String,
              required: true
        },
            treatment: {
              type: String,
              required: true
            },
        
        }]
    },
    {timestamps : true}
)

export const Patient = mongoose.model('Patient', patientSchema)