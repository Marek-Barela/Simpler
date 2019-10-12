const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Task = require("../../models/Task");

// @route     POST api/tasks
// @desc      Create new task
// @access    Private
router.post("/", [ 
  auth, 
  [
    check("description", "description of the task is required")
      .not()
      .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newTask = new Task ({
      user: req.user.id,
      projectID: req.body.projectID,
      description: req.body.description
    });

    const task = await newTask.save();

    res.json(task)
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     GET api/tasks/:id
// @desc      Get all tasks by user ID
// @access    Private
router.get("/:id", auth, async (req, res) => {
  try {
    if(req.user.id !== req.params.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    const tasks = await Task.find({
      user: req.params.id
    })
    .sort({ date: 1 });

    res.json(tasks);
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Tasks not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     PUT api/tasks/:id
// @desc      Edit task description
// @access    Private
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if(task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!task) {
      return res.status(404).json({ msg: "Task not found" })
    }

    task.description = req.body.description;
    task.projectID = req.body.projectID;

    await task.save()

    res.json({ msg: "task updated" });
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Task not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     DELETE api/tasks/:id
// @desc      Delete one task by id
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id);

    if(task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!task) {
      return res.status(404).json({ msg: "Task not found" })
    }

    await task.remove();

    res.json({ msg: "task deleted"});
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Task not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     DELETE api/tasks/all/:id
// @desc      Delete all tasks by projectID
// @access    Private
router.delete("/all/:id", auth, async (req, res) => {
  try {
    let tasks = await Task.find({
      projectID: req.params.id
    })

    if(!tasks) {
      return res.status(404).json({ msg: "Task not found" })
    }

    if(tasks[0].user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    tasks.forEach(task => task.remove());

    res.json({ msg: "tasks deleted"});
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Task not found" })
    }
    res.status(500).send("Server error");
  }
})

module.exports = router;