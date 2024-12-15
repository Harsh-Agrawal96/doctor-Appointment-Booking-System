
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  patinetId: {
    type: String,
    required: true,
  },
  patientemail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, {
  collection: 'contacts',
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact