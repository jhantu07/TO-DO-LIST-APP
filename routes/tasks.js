const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');

// Get all tasks
router.get('/', (req, res) => {
   Task.find()
      .then(tasks => res.json(tasks))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new task
router.post('/add', (req, res) => {
   const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
   });

   newTask.save()
      .then(() => res.json('Task added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Update a task
router.post('/update/:id', (req, res) => {
   Task.findById(req.params.id)
      .then(task => {
         task.title = req.body.title;
         task.description = req.body.description;
         task.completed = req.body.completed;

         task.save()
            .then(() => res.json('Task updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a task
router.delete('/:id', (req, res) => {
   Task.findByIdAndDelete(req.params.id)
      .then(() => res.json('Task deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
