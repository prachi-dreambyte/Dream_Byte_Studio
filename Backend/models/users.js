const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: JSON
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
      validate(value) {
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters long');
        }
        if (/\s/.test(value)) {
          throw new Error('Password cannot contain spaces');
        }
      },
      private: true,
    },
    status: {
      type: String,
      required: true,
      default: 'active',
    },
  },
  { timestamps: true }
);

// Compare password
UsersSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Hash password before saving
UsersSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model('users', UsersSchema);
module.exports = User;
