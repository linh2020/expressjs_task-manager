const Task = require("../models/Task.js");
const asyncWrapper = require("../middleware/async.js");

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(201).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  // const singleTask = await Task.findById(req.params.id);
  // const singleTask = await Task.findOne({ _id: req.params.id });

  const { id: taskID } = req.params;
  const singleTask = await Task.findOne({ _id: taskID });

  if (!singleTask) {
    return res.status(404).json({ message: `No task with id: ${taskID}` });
  }

  res.status(200).json(singleTask);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return res
      .status(404)
      .json({ message: `The task ID does not exist ${taskID}` });
  }

  res.status(200).json(updatedTask);
  // .json({ message: `The task has been updated successfully ${taskID}` });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // const singleTask = await Task.findByIdAndDelete(taskID);
  const singleTask = await Task.findOneAndDelete({ _id: taskID });

  if (!singleTask) {
    return res.status(404).json({ message: `No task found with id ${taskID}` });
  }

  res.status(200).json({
    task: null,
    message: `The task is deleted successfully ${taskID}`,
  });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
