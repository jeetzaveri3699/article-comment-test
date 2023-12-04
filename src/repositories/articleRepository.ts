import BaseRepository from "./baseRepository";

import { Article } from "../models/article";

export default class ArticleRepository extends BaseRepository {
  constructor() {
    super(Article);
  }
}
