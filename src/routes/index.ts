import { Request, Response, Router } from "express";
import articleRoute from "./article";
import commentRoute from "./comment";

const router = Router();

// api health
router.get("/health", (req: Request, res: Response) => res.send("API is Working."));

router.use("/articles", articleRoute);
router.use("/comments", commentRoute);

export default router;
