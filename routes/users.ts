import { Router } from "express";
import { getUsers, getCurrentUser } from "../controllers/users";
const users = Router();

users.get("/", getUsers);
users.get("/me", getCurrentUser);

export default users;
