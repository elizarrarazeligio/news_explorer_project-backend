import { JwtPayload } from "jsonwebtoken";
import { UserPayload } from "./users";

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}
