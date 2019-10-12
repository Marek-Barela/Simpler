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

module.exports = router;