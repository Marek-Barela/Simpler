const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Project = require("../../models/Project");

// @route     POST api/projects
// @desc      Create new project
// @access    Private
router.post("/", [ 
  auth, 
  [
    check("title", "Title of the project is required")
      .not()
      .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newProject = new Project ({
      title: req.body.title,
      user: req.user.id
    });

    const project = await newProject.save();

    res.json(project)
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     GET api/projects/:id
// @desc      Get all projects by user ID
// @access    Private
router.get("/:id", auth, async (req, res) => {
  try {
    if(req.user.id !== req.params.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    const projects = await Project.find({
      user: req.params.id
    })
    .sort({ date: 1 });

    res.json(projects);
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Project not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     PUT api/projects/:id
// @desc      Edit project title
// @access    Private
router.put("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if(project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!project) {
      return res.status(404).json({ msg: "Project not found" })
    }

    project.title = req.body.title;

    await project.save()

    res.json({ msg: "project updated" });
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Project not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     DELETE api/projects/:id
// @desc      Delete projects by id
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id);

    if(project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!project) {
      return res.status(404).json({ msg: "Project not found" })
    }

    await project.remove();

    res.json({ msg: "project deleted"});
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Project not found" })
    }
    res.status(500).send("Server error");
  }
})


module.exports = router;