import { Router } from "express";
import { authController } from "../controllers/authController";

const router = Router();

// Route that process auth
router.route("/:fileName").get(authController.getAuth);

export default router;
