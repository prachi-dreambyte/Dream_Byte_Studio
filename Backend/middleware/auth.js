const jwt = require('jsonwebtoken');
const User = require('../models/users');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: true, message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded || !decoded.user_id) {
      return res.status(401).json({ error: true, message: 'Invalid token' });
    }

    const user = await User.findById(decoded.user_id);
    if (!user) {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    return res.status(401).json({ error: true, message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
