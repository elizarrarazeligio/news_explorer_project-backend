import { Router } from "express";
import {
  getArticles,
  postArticle,
  deleteArticle,
} from "../controllers/articles";
const articles = Router();

articles.get("/", getArticles);
articles.post("/", postArticle);
articles.delete("/:articleId", deleteArticle);

export default articles;
