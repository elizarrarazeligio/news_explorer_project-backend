import Article from "../models/article";
import NotFoundError from "../errors/not-found-err";
import BadRequestError from "../errors/bad-request-err";
import { Request, Response, NextFunction } from "express";

// ===== GET - Obtener artículos por usuario ========================
export const getArticles = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const userId = req.user._id;
  Article.find({ owner: userId })
    .orFail(() => {
      throw new NotFoundError("Sin artículos disponibles");
    })
    .then((articles) =>
      res.status(200).send({ status: "success", data: articles })
    )
    .catch(next);
};

// ===== POST - Crear nuevo artículo ================================
export const postArticle = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const userId = req.user._id;
  const { keyword, title, description, publishedAt, source, url, urlToImage } =
    req.body;

  if (!keyword || !title || !description || !publishedAt || !source || !url)
    throw new BadRequestError("Llene todos los campos correspondientes");

  Article.create({
    keyword,
    title,
    description,
    publishedAt,
    source,
    url,
    urlToImage,
    owner: userId,
  })
    .then((article) =>
      res.status(201).send({ status: "success", data: article })
    )
    .catch(next);
};

// ===== DELETE - Borrar artículo por ID ============================
export const deleteArticle = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { articleId } = req.params;

  Article.findByIdAndDelete(articleId)
    .orFail(() => {
      throw new NotFoundError(`No se encontró el artículo con ID ${articleId}`);
    })
    .then((article) =>
      res.status(200).send({ status: "success", data: article })
    )
    .catch(next);
};
