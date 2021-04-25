import { Router } from "express";

import { fileRetrieverController } from "../controllers/fileRetrieverController";

const router = Router();

// the redirect route that retrieves file.
router.route("/:file").get(fileRetrieverController.index);

export default router;
