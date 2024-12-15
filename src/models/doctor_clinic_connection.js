
import mongoose from "mongoose";

const doctorClinicConnectSchema = new mongoose.Schema({
  clinicId: {
    type: String,
    required: true,
  },
  doctorId: {
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
}, {
  collection: 'connectionDoctorClinic',
});

const DoctorClinicConnect = mongoose.model('DoctorClinicConnect', doctorClinicConnectSchema);
export default DoctorClinicConnect