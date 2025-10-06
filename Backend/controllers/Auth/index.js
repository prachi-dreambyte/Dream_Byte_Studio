const Joi = require("joi");
const User = require("../../models/users");
const jwt = require("jsonwebtoken");

// Password validation rule: min 6 chars, no spaces
const passwordRule = (value, helpers) => {
  if (value.length < 6) {
    return helpers.message("Password must be at least 6 characters long");
  }
  if (/\s/.test(value)) {
    return helpers.message("Password cannot contain spaces");
  }
  return value;
};

exports.requestSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().custom(passwordRule),
    });

    const { error } = schema.validate({ email, password });
    if (error) {
      return res.status(400).json({ error: true, message: error.message });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      return res.status(401).json({
        error: true,
        message: "Incorrect email or password",
      });
    }

    // Generate JWT
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    // ✅ Send token as a secure, HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // cannot be accessed by JS
      secure: process.env.NODE_ENV === "production", // only HTTPS in prod
      sameSite: "Lax", // or "Strict" if backend & frontend same domain
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // ✅ Return only user info, no token
    return res.status(200).json({
      error: false,
      user,
      message: "Logged in successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message || "Something went wrong.",
    });
  }
};

// Get logged-in user
exports.getLoggedInUser = async (req, res) => {
  try {
    // req.user is attached by authMiddleware
    if (!req.user) {
      return res.status(401).json({ error: true, message: "Not authenticated" });
    }

    return res.status(200).json({
      error: false,
      user: req.user, // already fetched from DB in middleware
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message || "Something went wrong.",
    });
  }
};

// Logout user
exports.logoutUser = async (req, res) => {
  try {
    // Clear HTTP-only cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    return res.status(200).json({
      error: false,
      message: "Logged out successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message || "Something went wrong.",
    });
  }
};
