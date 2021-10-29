
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));

// middleware
app.use(express.json()); //if we dont use this,there willn't be any data in req.body(for capturing data from req.body)

app.use('/api/v1/tasks', tasks);

//middleware (when no route matches)
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 3000;

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a task
// app.get('/api/v1/tasks/:id')      - get a single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

const start = async() => {
   try {
       // if DB connection successful, then only spin up the server
       await connectDB(process.env.MONGO_URI)
       .then(() => console.log('connected to mongo DB'))
       .catch(error => console.log(error));

       app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
       })
   } catch (error) {
       console.log(error);
   }
}

start();

