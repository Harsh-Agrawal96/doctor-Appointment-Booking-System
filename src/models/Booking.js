
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true,
  },
  dateofStart: {
    type: Date,
    required: true,
  },
  dateofappointment: {
    type: Date,
    required: true,
  },
  dateofComform: {
    type: Date,
    required: true,
  },
  dateofDecline: {
    type: Date,
    required: true,
  },
  datetoconform: {
    type: Date,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  consultantId: {
    type: String,
    required: true,
  },
  consultantName: {
    type: String,
    required: true,
  },
  consultantType: {
    type: Number,
    required: true,
  },
  symtom: {
    type: String,
    required: true,
  },
  consultantMessage: {
    type: String,
    default : "Not updated"
  },
  patientMessage: {
    type: String,
    default : "Not updated"
  },
  consultDate: {
    type: String,
    default : "Not updated"
  },
  preferredConsultdate: {
    type: String,
    default : "Not updated"
  },
  bookingType: {
    type: Number,
    required: true,
  },
}, {
  collection: 'allBooking',
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking
