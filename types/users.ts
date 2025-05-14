import { Model, ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<IUser> {
  findUserByCredentials(email: string, password: string): Promise<IUser>;
}

export interface UserPayload {
  _id: ObjectId;
}
