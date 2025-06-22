import ContactMessage from "../models/ContactMessage.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const handleNewMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = await ContactMessage.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ error: "Message not found" });
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteMessageById = async (req, res) => {
  try {
    const deleted = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Message not found" });
    res.json({ message: "Deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
