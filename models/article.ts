import { Article } from "../types/articles";
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema<Article>({
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
      validator(value: string) {
        return /https?:\/\/(w{3})?\.?.+/.test(value);
      },
      message: "Formato de URL inválido.",
    },
  },
  urlToImage: {
    type: String,
    validate: {
      validator(value: string) {
        return /https?:\/\/(w{3})?\.?.+/.test(value);
      },
      message: "Formato de URL inválido.",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model<Article>("article", articleSchema);
