import { Router } from "express";
import {
  getArticles,
  postArticle,
  deleteArticle,
} from "../controllers/articles";
import {
  postArticleValidation,
  deleteArticleValidation,
} from "../utils/celebrate";
const articles = Router();

articles.get("/", getArticles);
articles.post("/", postArticleValidation, postArticle);
articles.delete("/:articleId", deleteArticleValidation, deleteArticle);

export default articles;
