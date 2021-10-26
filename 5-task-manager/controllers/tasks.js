const { reset } = require("nodemon");

const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTask = (req, res) => {
    const {id} = req.params;
    res.json({id});
}

const updateTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}