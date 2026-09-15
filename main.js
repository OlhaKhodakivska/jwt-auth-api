require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "JWT Auth API is running",
    });
});

app.get("/public", (req, res) => {
    res.json({
        message: "This is a public route",
    });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "geheim123") {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      userId: 1,
      username: "admin",
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    }
  );

  res.json({
    success: true,
    token,
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});