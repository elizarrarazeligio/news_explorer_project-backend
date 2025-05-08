import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(value: string) {
        return /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    select: false,
  },
});

export default mongoose.model("user", userSchema);
