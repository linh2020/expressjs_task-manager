const getAllTasks = (req, res) => {
  res.status(200).send("all items from the file");
};

const createTask = (req, res) => {
  res.status(200).json(req.body);
};

const getTask = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.status(200).send("Update task");
};

const deleteTask = (req, res) => {
  res.status(200).send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
