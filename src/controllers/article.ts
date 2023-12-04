import { Request, RequestHandler, Response } from "express";

import {
  getArticles,
  getArticleById,
  createArticle,
} from "../services/article";

/**
 * Get all articles
 * @param req
 * @param res
 * @returns
 */
export const getAll: RequestHandler = async (req: Request, res: Response) => {
  try {
    const page = req.query?.page ? +req.query?.page : 1;
    const limit = req.query?.limit ? +req.query?.limit : 20;

    const data = await getArticles(page, limit);

    return res.status(200).json({
      status: 200,
      message: "Get Articles successfully.",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error ?? "Something went wrong while getting articles..!",
    });
  }
};

/**
 * Get Article by ID
 * @param req
 * @param res
 * @returns
 */
export const getById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params?.id;

    const article = await getArticleById(+id);
    if (!article) {
      return res.status(404).json({
        status: 404,
        message: "Article not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Get Article by ID successfully.",
      data: article,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error ?? "Something went wrong while getting article by ID..!",
    });
  }
};

/**
 * Create an article
 * @param req
 * @param res
 * @returns
 */
export const create: RequestHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await createArticle(payload);

    return res.status(201).json({
      status: 201,
      message: "Create an Article successfully.",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error ?? "Something went wrong while creating an article..!",
    });
  }
};
