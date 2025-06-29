// this page is the reception desk !!
import express from "express";
import {
  ContactMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message received!" });
  } catch (error) {
    console.error("Error in /contact POST route:", error);
    if (!res.headersSent) {
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    }
  }
});

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.delete("/:id", deleteMessageById);

export default router;
