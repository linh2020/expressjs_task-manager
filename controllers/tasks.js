const Task = require("../models/Task.js");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    // const singleTask = await Task.findById(req.params.id);
    // const singleTask = await Task.findOne({ _id: req.params.id });

    const { id: taskID } = req.params;
    const singleTask = await Task.findOne({ _id: taskID });

    if (!singleTask) {
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }

    res.status(200).json(singleTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("Update task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // const singleTask = await Task.findByIdAndDelete(taskID);
    const singleTask = await Task.findOneAndDelete({ _id: taskID });

    if (!singleTask) {
      return res
        .status(404)
        .json({ message: `No task found with id ${taskID}` });
    }

    res.status(200).json({
      task: null,
      message: `The task is deleted successfully ${taskID}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
