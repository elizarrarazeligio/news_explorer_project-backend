import { Router } from "express";
const articles = Router();

articles.get("/:userId");
articles.post("/:userId");
articles.delete("/:userId/:articleId");

export default articles;
