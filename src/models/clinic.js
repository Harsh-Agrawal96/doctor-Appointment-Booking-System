
import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  securityKey: {
    type: Number,
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
  facility: {
    type: String,
    required: true,
  },
  mainFacility: {
    type: String,
    required: true,
  },
  establishedDate: {
    type: Date,
  },
}, {
  collection: 'clinics',
});

const Clinic = mongoose.model('Clinic', clinicSchema);
export default Clinic