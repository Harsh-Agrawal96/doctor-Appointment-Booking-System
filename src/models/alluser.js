
import mongoose from "mongoose";

const allUserSchema = new mongoose.Schema({
  usertype: {
    type: Number,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
}, {
  collection: 'allUser',
});

const User = mongoose.model('User', allUserSchema);
export default User;
