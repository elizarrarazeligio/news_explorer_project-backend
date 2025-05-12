import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Middlewares importados
import auth from "./middlewares/auth";
import errorHandler from "./middlewares/errors";
import { requestLogger, errorLogger } from "./middlewares/logger";

// Pre-validaciones de entradas de usuario
import { errors } from "celebrate";
import { registerValidation } from "./utils/celebrate";

// Controladores de autenticación importados
import { userLogin, userRegister } from "./controllers/auth";

// Rutas importadas
import users from "./routes/users";
import articles from "./routes/articles";

const app = express();
const { PORT = 3005 } = process.env;
const allowedOrigins = ["http://localhost:3000"];
mongoose.connect("mongodb://localhost:27017/newsdb");

app.use(bodyParser.json());
app.use(cors({ origin: allowedOrigins }));

// Rutas sin autenticación
app.use(requestLogger); // Registro de solicitudes
app.post("/signin", userLogin);
app.post("/signup", registerValidation, userRegister);

// Middleware para autenticación de usuarios
app.use(auth);

// Rutas que requieren autenticación
app.use("/users", users);
app.use("/articles", articles);

// Middlewares para manejo de errores
app.use(errorLogger); // Registro de errores
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
