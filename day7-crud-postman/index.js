const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Read tasks
const readTasks = () => {
    try {
        const data = fs.readFileSync('./data.json');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data.json:", err);
        return [];
    }
};

// Write tasks to data.json
const writeTasks = (tasks) => {
    try {
        fs.writeFileSync('./data.json', JSON.stringify(tasks, null, 1));
    } catch (err) {
        console.error("Error writing to data.json:", err);
    }
};

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API');
});

// Get all tasks
app.get('/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// Create a task
app.post('/tasks', (req, res) => {
    const tasks = readTasks();  // current tasks from data.json
    console.log("Current tasks before adding new task:", tasks);  // Log the current tasks

    const newTask = { 
        id: Date.now(),
        ...req.body
    };

    // tasks.unshift(newTask);
    tasks.splice(1,0,newTask);
    console.log("Tasks after adding new task:", tasks);

    writeTasks(tasks); 
    res.status(200).json(newTask);// 200  for success
});


// Update a task
app.put('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        writeTasks(tasks);
        res.json(tasks[index]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    let tasks = readTasks();
    const taskId = parseInt(req.params.id);

    // simple code with no console
    // tasks = tasks.filter(task => task.id !== taskId);
    // writeTasks(tasks);
    // res.json(tasks)
    // res.status(204).send(); // comment this it will throw error

    const originalLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length < originalLength) {
        console.log('deleted'); // log if a task removed
        writeTasks(tasks);
        res.status(204).send(); // no content needed
    } else {
        res.status(404).json({ error: 'Task not found' }); // Task ID not found
    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
