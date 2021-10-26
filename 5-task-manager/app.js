const express = require('express');
const app = express();

const tasks = require('./routes/tasks');

// middleware
app.use(express.json()); //if we dont use this,there willn't be any data in req.body(for capturing data from req.body)
app.use(express.static('./public'));

app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a task
// app.get('/api/v1/tasks/:id')      - get a single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})