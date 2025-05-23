import { Article } from "../types/articles";
import { isValidUrl } from "../utils/utils";
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema<Article>(
  {
    keyword: {
      type: String,
      maxLength: 50,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      validate: {
        validator: isValidUrl,
        message: "Formato de URL inválido.",
      },
      unique: true,
    },
    urlToImage: {
      type: String,
      validate: {
        validator: isValidUrl,
        message: "Formato de URL inválido.",
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Article>("article", articleSchema);
