const getAllTasks = (req, res) => {
  res.status(200).send("all items from the file");
};

const createTask = (req, res) => {
  res.status(200).send("create task");
};

const getTask = (req, res) => {
  res.status(200).send("get single task");
};

const updateTask = (req, res) => {
  res.status(200).send("Update task");
};

const deleteTask = (req, res) => {
  res.status(200).send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
