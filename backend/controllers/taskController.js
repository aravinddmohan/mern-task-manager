const Task = require("../models/taskModel");

// Get task of logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Create task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      status: req.body.status,
      createdBy: req.user._id
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
