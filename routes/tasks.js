const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../controllers/tasks.js");

router.get("/", getAllTasks);

module.exports = router;
