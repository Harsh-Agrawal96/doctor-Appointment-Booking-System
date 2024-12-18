
import mongoose from 'mongoose';

const doctorClinicRequestSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true,
  },
  clinicId: {
    type: String,
    required: true,
  },
  clinicName: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  workingDays: {
    type: String,
    required: true,
  },
  workingTime: {
    type: String,
    required: true,
  },
  clinicMessage: {
    type: String,
    required: true,
  },
  doctorMessage: {
    type: String,
    default : "Not updated"
  },
}, {
  collection: 'doctorClinicRequest',
});

const DoctorClinicRequest = mongoose.model('DoctorClinicRequest', doctorClinicRequestSchema);
export default DoctorClinicRequest