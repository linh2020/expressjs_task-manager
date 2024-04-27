const express = require("express");
const app = express();
const PORT = 5000;

// routes
app.get("/", (req, res) => {
  res.send("Task Manager API With Node JS Express and MongoDB");
});

// server listening
app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
