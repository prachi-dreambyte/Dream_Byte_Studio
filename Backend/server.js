// backend/server.js
const express = require("express");
const app = express();

app.use(express.json()); // for JSON request body

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Example API
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const cors = require("cors");
app.use(cors());

