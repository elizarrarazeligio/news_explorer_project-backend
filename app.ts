const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
