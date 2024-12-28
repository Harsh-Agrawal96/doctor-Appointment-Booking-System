
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
  appointmentFee : {
    type : Number,
    default : 0
  },
  sergeryFee : {
    type : Number,
    default : 0
  },
  appointmentCount : {
    type : Number,
    default : 0
  },
  sergeryCount : {
    type : Number,
    default : 0
  },
  reviewPercent: {
    type: Number,
    default : 0
  },
  reviewNumber: {
    type: Number,
    default : 0
  },
  establishedDate: {
    type: Date,
  },
}, {
  collection: 'clinics',
});

const Clinic = mongoose.model('Clinic', clinicSchema);
export default Clinic