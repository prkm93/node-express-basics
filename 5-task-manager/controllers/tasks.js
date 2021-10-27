const Task = require('../models/Task');

const { reset } = require("nodemon");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (err) {
        res.status(500).json({err: msg});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => {

    try {

        const { id: taskId } = req.params; //aliasing id to taskId
        const task = await Task.findOne({ _id : taskId });

        // if task not found
        if (!task) {
            return res.status(404).json({msg: `No task with id :${taskId} `})
        }

        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({msg:err});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        }); // the options (3rd argument) is used to display the updated result in response body, though the field  is updated but it doesn't display in response.
        
        if (!updatedTask) {
            return res.send(404).json({msg: `No task with id: ${taskId}`});
        }

        res.status(200).json({updatedTask});

    } catch (err) {
        res.status(500).json({msg: err});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        
        if (!task) {
            return res.send(200).json({msg: `no task with id : ${taskId}` });
        }

        res.status(200).json({task, msg: `task deleted successfully with id :${taskId}`});
        //  res.status(200).send({task: null, status: 'success'}) // since deleting only deletes item and as per UX, only delete message should be displayed.
    } catch (err) { 
        res.send(500).json({msg: err});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}