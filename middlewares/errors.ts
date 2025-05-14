import { Request, Response, NextFunction } from "express";
import { CustomError } from "../types/errors";

// ===== Manejo centralizado de errores =============================
export default (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    status: "error",
    message:
      statusCode === 500
        ? "Error desconocido, contacte a un administrador"
        : message,
  });
};
