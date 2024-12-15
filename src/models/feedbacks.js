
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  patinetId: {
    type: String,
    required: true,
  },
  patinetemail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, {
  collection: 'feedbacks',
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback