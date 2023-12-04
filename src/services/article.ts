import { CreateArticleDto } from "../dto/createArticleDto";
import { validatorDto } from "../validation";

import ArticleRepository from "../repositories/articleRepository";

const Article = new ArticleRepository();

/**
 * Get all articles
 * @param page
 * @param limit
 * @returns
 */
export const getArticles = async (page: number, limit: number) => {
  try {
    let skip = (page - 1) * limit;

    const { count, rows } = await Article.findAndCountAll({
      limit,
      offset: skip,
    });

    return { page, pageSize: limit, total: count, articles: rows };
  } catch (error) {
    throw error;
  }
};

/**
 * Get article by ID
 * @param id
 * @returns
 */
export const getArticleById = async (id: number) => {
  try {
    return await Article.findByPk(id);
  } catch (error) {
    throw error;
  }
};

/**
 * Create an article
 * @param payload
 * @returns
 */
export const createArticle = async (payload: any) => {
  try {
    await validatorDto(CreateArticleDto, payload);

    return await Article.create(payload);
  } catch (error) {
    throw error;
  }
};
