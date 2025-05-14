import BadRequestError from "../errors/bad-request-err";
import { IUser, UserModel } from "../types/users";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser, UserModel>({
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

userSchema.statics.findUserByCredentials = async function findUserByCredentials(
  email: string,
  password: string
): Promise<IUser | BadRequestError> {
  const user = await this.findOne({ email }).select("+password");
  if (!user)
    return Promise.reject(new BadRequestError("Incorrect password or email"));
  const matched = await bcrypt.compare(password, user.password);
  if (!matched)
    return Promise.reject(new BadRequestError("Incorrect password or email"));
  return user;
};

export default mongoose.model<IUser, UserModel>("user", userSchema);
