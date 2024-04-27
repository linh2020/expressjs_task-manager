const express = require("express");
const app = express();
const PORT = 5000;

const tasksRoute = require("./routes/tasks.js");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager API With Node JS Express and MongoDB");
});

app.use("/api/v1/tasks", tasksRoute);

// Route Structure and Details
// app.get("/api/v1/tasks"); // get all the tasks
// app.post("/api/v1/tasks"); // create a new task
// app.get("/api/v1/tasks/:id"); // get single task
// app.path("/api/v1/tasks/:id"); // update task
// app.delete("/api/v1/tasks/:id"); // delete task

// server listening
app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
