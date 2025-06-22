// this page is the reception desk !!
import express from "express";
import {
  handleNewMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", handleNewMessage);
router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.delete("/:id", deleteMessageById);

export default router;
