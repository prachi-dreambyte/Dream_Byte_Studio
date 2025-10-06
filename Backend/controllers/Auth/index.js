const Joi = require("joi");
const User = require('../../models/users');
const jwt = require('jsonwebtoken');

// Password validation rule: min 6 chars, no spaces
const passwordRule = (value, helpers) => {
  if (value.length < 6) {
    return helpers.message('Password must be at least 6 characters long');
  }
  if (/\s/.test(value)) {
    return helpers.message('Password cannot contain spaces');
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
    if (error) return res.status(400).json({ error: true, message: error.message });

    // Find user by email
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      return res.status(401).json({
        error: true,
        message: 'Incorrect email or password',
      });
    }

    // Generate JWT token
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_KEY, { expiresIn: '30d' });

    return res.status(200).json({
      user,
      access_token: token,
      message: "Logged in successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message || "Something went wrong.",
    });
  }
};


exports.getLoggedInUser = async (req, res) => {
  try {
    const user = req.user; // user is attached by authMiddleware
    return res.status(200).json({
      error: false,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message || 'Something went wrong.',
    });
  }
};