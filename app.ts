const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Rutas exportadas
const users = require("./routes/users.ts");
const news = require("./routes/news.ts");

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

// Rutas sin autenticación
app.post("/signin");
app.post("/signup");

// Rutas que requieren autenticación
// app.use("/users", users);
// app.use("/news", news);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
