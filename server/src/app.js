const express = require("express");
const cors = require("cors");
const iptvRouter = require("./routes/iptv.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/iptv", iptvRouter);
// Health check
app.get("/", (req, res) => {
  res.json({ status: "InstaTV backend running 🚀" });
});


// Routes
// app.use("/api/user", require("./routes/user.routes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
