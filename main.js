const express = require("express");

const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});