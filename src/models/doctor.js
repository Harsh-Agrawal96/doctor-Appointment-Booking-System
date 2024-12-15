
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  fullName: {
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
  work: {
    type: String,
  },
  reviewPercent: {
    type: Number,
    required: true,
  },
  reviewNumber: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
  },
  Services: {
    type: Array,
    required: true,
  },
  specializations: {
    type: Array,
    required: true,
  },
  awards: {
    type: Array,
    required: true,
  },
  education: {
    type: Array,
    required: true,
  },
  membership: {
    type: Array,
    required: true,
  },
  experience: {
    type: Array,
    required: true,
  },
  Registration: {
    type: Array,
    required: true,
  },
}, {
  collection: 'doctors',
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor