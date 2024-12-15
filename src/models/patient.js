
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
  },
  State: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  DOB: {
    type: Date,
  },
}, {
  collection: 'patients',
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient
