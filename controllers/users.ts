import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import NotFoundError from "../errors/not-found-err";

// ===== GET - Obtener TODOS los usuarios ===========================
export const getUsers = (_req: Request, res: Response, next: NextFunction) => {
  User.find({})
    .orFail(() => {
      throw new NotFoundError("No se encontró ningún usuario.");
    })
    .then((users) => res.send({ status: "success", data: users }))
    .catch(next);
};

// ===== GET - Obtener usuario con sesión actual ====================
export const getCurrentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;

  User.findById(userId)
    .orFail(() => {
      throw new NotFoundError("No hay una sesión iniciada.");
    })
    .then((user) => res.send({ status: "success", data: user }))
    .catch(next);
};
