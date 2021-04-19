import { Router } from "express";
import { fileRetrieverController } from "../controllers/fileRetrieverController";

const router = Router();

router.route("/:file").get(fileRetrieverController.index);

export default router;
