"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users = (0, express_1.Router)();
users.get("/");
users.get("/me");
exports.default = users;
