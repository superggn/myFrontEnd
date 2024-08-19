const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const port = 8000;

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dev_test.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
