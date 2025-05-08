import { Router } from "express";
import {
  getArticles,
  postArticle,
  deleteArticle,
} from "../controllers/articles";
const articles = Router();

articles.get("/:userId", getArticles);
articles.post("/:userId", postArticle);
articles.delete("/:userId/:articleId", deleteArticle);

export default articles;
