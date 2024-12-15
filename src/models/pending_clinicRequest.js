
import mongoose from "mongoose";

const pendingClinicSchema = new mongoose.Schema({
  doctorEmail: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  clinicName: {
    type: String,
    required: true,
  },
  clinicEmail: {
    type: String,
    required: true,
  },
}, {
  collection: 'newClinicRequest',
});

const PendingClinic = mongoose.model('PendingClinic', pendingClinicSchema);
export default PendingClinic