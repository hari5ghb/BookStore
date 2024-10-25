import express from 'express';
import User from './model/user.models.js'; // Import your User model

const router = express.Router();

// Add purchased book to the user's cart
router.post('/purchase', async (req, res) => {
  const { userId, item } = req.body; // Assuming item has book details
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.purchased.push(item); // Add book details to purchased array
    await user.save();
    
    res.status(200).json({ message: 'Book added to cart', purchased: user.purchased });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book to cart', error });
  }
});

export default router;
