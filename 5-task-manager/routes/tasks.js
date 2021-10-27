const express = require('express');
const router = express.Router();
const {getAllTasks, getTask, updateTask, createTask, deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask); // for same routes, we can chain the methods

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;