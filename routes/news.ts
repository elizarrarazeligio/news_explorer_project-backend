import { Router } from "express";
const news = Router();

news.get("/:userId");
news.post("/:userId");
news.delete("/:userId/:articleId");

export default news;
