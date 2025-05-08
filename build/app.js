"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Rutas exportadas
const users_1 = __importDefault(require("./routes/users"));
const news_1 = __importDefault(require("./routes/news"));
const app = (0, express_1.default)();
const { PORT = 3000 } = process.env;
app.use(body_parser_1.default.json());
// Rutas sin autenticación
app.post("/signin");
app.post("/signup");
// Rutas que requieren autenticación
app.use("/users", users_1.default);
app.use("/news", news_1.default);
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
