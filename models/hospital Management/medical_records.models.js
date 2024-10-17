import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        patientId: {
            type: Schema.Types.ObjectId,
            ref: 'Patient',
            required: true
        },
        doctorId: {
            type: Schema.Types.ObjectId,
            ref: 'Doctor',
            required: true
        },
        diagnosis: {
            type: String,
            required: true
        },
        treatment: {
            type: String,
            required: true
        },
        dateOfVisit: {
            type: Date,
            required: true
        },
        notes: {
            type: String,
            default: ''
        },
    },
    {timestamps : true}
)

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)