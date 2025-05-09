import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Middlewares importados
import errorHandler from "./middlewares/errors";

// Rutas importadas
import users from "./routes/users";
import articles from "./routes/articles";

const app = express();
const { PORT = 3000 } = process.env;
mongoose.connect("mongodb://localhost:27017/newsdb");

app.use(bodyParser.json());

// Rutas sin autenticación
app.post("/signin");
app.post("/signup");

// Rutas que requieren autenticación
app.use("/users", users);
app.use("/news", articles);

// Middleware para manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
