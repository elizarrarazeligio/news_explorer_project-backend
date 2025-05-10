import { NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
const { TS_NODE_DEV, JWT_SECRET } = process.env;

export default (req: any, res: any, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer "))
    return res.status(403).send({ message: "Se requiere autorización" });

  const token = authorization.replace("Bearer ", "");

  let payload: JwtPayload;
  try {
    payload = jwt.verify(
      token,
      TS_NODE_DEV ? "JWT_SECRET" : (JWT_SECRET as Secret)
    ) as JwtPayload;
  } catch (err) {
    return res.status(403).send({ message: "Se requiere autorización" });
  }

  req.user = payload;
  next();
};
