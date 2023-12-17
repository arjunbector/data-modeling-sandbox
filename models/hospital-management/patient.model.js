import mongoose from "mongoose"
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    bloddGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum : ["M", "F", "O"]
    },
    admittedInf: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Hospital"
    }
},{timestamps: true});
export const Patient = mongoose.model("Patient", patientSchema);