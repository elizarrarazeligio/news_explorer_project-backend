import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { UserPayload } from "types/users";
const { TS_NODE_DEV, JWT_SECRET } = process.env;

// ===== Autorización de usuario con JWT ============================
export default (req: Request, res: Response, next: NextFunction): void => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(403).send({ message: "Se requiere autorización" });
    return;
  }

  const token = authorization.replace("Bearer ", "");

  let payload: UserPayload;
  try {
    payload = jwt.verify(
      token,
      TS_NODE_DEV ? "JWT_SECRET" : (JWT_SECRET as Secret)
    ) as UserPayload;
  } catch (err) {
    res.status(403).send({ message: "Se requiere autorización" });
    return;
  }

  req.user = payload;
  next();
};
