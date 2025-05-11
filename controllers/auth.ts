import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import BadRequestError from "../errors/bad-request-err";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";
const { TS_NODE_DEV, JWT_SECRET } = process.env;

// ===== POST - Login  de usuario ===================================
export const userLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        TS_NODE_DEV ? "JWT_SECRET" : (JWT_SECRET as Secret),
        {
          expiresIn: "1d",
        }
      );

      res
        .status(200)
        .send({ status: "success", message: "Autenticación exitosa!", token });
    })
    .catch(next);
};

// ===== POST - Registro  de usuario ================================
export const userRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    throw new BadRequestError("Ingresa todos los parámetros solicitados");

  bcrypt.hash(password, 10).then((hashedPassword) => {
    User.create({ name, email, password: hashedPassword })
      .then((user) => res.status(201).send({ status: "success", data: user }))
      .catch(next);
  });
};
