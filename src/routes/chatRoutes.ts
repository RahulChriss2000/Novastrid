import { Router } from "express";
import { importChatHistory } from "../controllers/chatController";

const router = Router();

router.get('/import', importChatHistory);

export default router;