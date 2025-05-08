"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const news = (0, express_1.Router)();
news.get("/:userId");
news.post("/:userId");
news.delete("/:userId/:articleId");
exports.default = news;
