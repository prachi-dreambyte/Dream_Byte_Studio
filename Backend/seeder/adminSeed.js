const User = require('../models/users'); // adjust path to your model

async function createAdminUser() {
  try {
    const adminEmail = "admin@dreambyte.com"; // change this to your desired admin email
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const adminUser = new User({
        fullName: "Admin User",
        email: adminEmail,
        password: "Admin@123", // will be hashed automatically because of pre-save hook
        status: "active",
      });

      await adminUser.save();
      console.log("✅ Admin user created successfully");
    } else {
      console.log("ℹ️ Admin user already exists");
    }
  } catch (err) {
    console.error("❌ Error creating admin user:", err.message);
  }
}

module.exports = createAdminUser;
