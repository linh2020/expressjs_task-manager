const Task = require("../models/Task.js");

const getAllTasks = (req, res) => {
  res.status(200).send("all items from the file");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
