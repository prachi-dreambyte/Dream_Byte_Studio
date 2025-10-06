require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes.js");
require("./config/connection.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.use("/public", express.static("public", { maxAge: 31536000 }));
app.use("/api", routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
