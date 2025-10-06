const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authMiddleware = async (req, res, next) => {
  try {
    // ✅ Read token from HTTP-only cookie
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: true, message: "Not authenticated" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded || !decoded.user_id) {
      return res.status(401).json({ error: true, message: "Invalid token" });
    }

    // Fetch user from DB
    const user = await User.findById(decoded.user_id).select("-password");
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    req.user = user; // attach user to request
    next(); // proceed to the API route
  } catch (error) {
    return res.status(401).json({ error: true, message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
