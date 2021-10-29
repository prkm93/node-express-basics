const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');


const getAllTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks, amount: tasks.length});
})

const createTask = asyncWrapper(async (req, res) => {
    
    const task = await Task.create(req.body);
    res.status(201).json({ task });

})

const getTask = asyncWrapper(async (req, res, next) => {

    const { id: taskId } = req.params; //aliasing id to taskId
    const task = await Task.findOne({ _id : taskId });

    // if task not found
    if (!task) {
        const error = new Error('Not found');
        error.status = 404;
        return next(error);
    }

    res.status(200).json({task});
})

const updateTask = asyncWrapper(async (req, res) => {

    const {id: taskId} = req.params;
    const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    }); // the options (3rd argument) is used to display the updated result in response body, though the field  is updated but it doesn't display in response.
    
    if (!updatedTask) {
        return res.send(404).json({msg: `No task with id: ${taskId}`});
    }

    res.status(200).json({updatedTask});
})

const deleteTask = asyncWrapper (async (req, res) => {

    const {id: taskId} = req.params;
    const task = await Task.findOneAndDelete({_id: taskId});
    
    if (!task) {
        return res.send(200).json({msg: `no task with id : ${taskId}` });
    }

    res.status(200).send({task: null, status: 'success'}) // since deleting only deletes item and as per UX, only delete message should be displayed.
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}