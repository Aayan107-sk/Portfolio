// server/routes/contact.js
import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(201).json({ success: true, data: newMsg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

export default router;
