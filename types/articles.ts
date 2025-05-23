import { Types } from "mongoose";

export interface Article {
  _id: Types.ObjectId;
  keyword: string;
  title: string;
  description: string;
  publishedAt: string;
  source: string;
  url: string;
  urlToImage?: string;
  owner: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
