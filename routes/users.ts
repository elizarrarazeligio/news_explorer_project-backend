import { Router } from "express";
const users = Router();

users.get("/");
users.get("/me");

export default users;
