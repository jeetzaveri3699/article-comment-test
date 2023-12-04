import { Request, RequestHandler, Response } from "express";

import { createComments, getCommentsByArticle } from "../services/comment";

/**
 * Get all articles
 * @param req
 * @param res
 * @returns
 */
export const getComments: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params?.id;

    const comments = await getCommentsByArticle(+id);

    return res.status(200).json({
      status: 200,
      message: "Get Comments on an article successfully.",
      data: comments,
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
 * Create an article
 * @param req
 * @param res
 * @returns
 */
export const createComment: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const payload = req.body;

    const comment = await createComments(payload);

    return res.status(201).json({
      status: 201,
      message: "Create a Comment successfully.",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error ?? "Something went wrong while creating a comment..!",
    });
  }
};
