import { Router } from "express";
import { createComment, getComments } from "../controllers/comment";

const router = Router();

router.post("/", createComment);

router.get("/article/:id", getComments);

export default router;
