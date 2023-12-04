import { CreateCommentDto } from "../dto/createCommentDto";

import { validatorDto } from "../validation";

import CommentRepository from "../repositories/commentRepository";
import ArticleRepository from "../repositories/articleRepository";

const Comment = new CommentRepository();
const Article = new ArticleRepository();

/**
 * Get Comments by article
 * @param id
 * @returns
 */
export const getCommentsByArticle = async (id: number) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) throw "Article is not found.";

    return await Comment.findAndCountAll({
      where: { articleId: article.id },
    });

  } catch (error) {
    throw error;
  }
};

export const createComments = async (payload: any) => {
  try {
    if (payload.articleId && payload.commentId) {
      throw "Invalid IDs input. You just have to pass articleId or commentId.";
    }

    if (payload.articleId) {
      const article = await Article.findByPk(payload.articleId);
      if (!article) {
        throw "Invalid Article ID input. Please check and try again.";
      }
    }

    if (payload.commentId) {
      const comment = await Comment.findByPk(payload.commentId);
      if (!comment) {
        throw "Invalid Comment ID input. Please check and try again.";
      }
    }

    if (!payload.articleId && !payload.commentId) {
      throw "Invalid IDs input. Please add one of the article or comment ID.";
    }

    await validatorDto(CreateCommentDto, payload);

    return await Comment.create(payload);
  } catch (error) {
    throw error;
  }
};
