const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Read tasks
const readTasks = () => {
    try {
        const data = fs.readFileSync('./day3/miniTask/data.json');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data.json:", err);
        return [];
    }
};

// Write tasks to data.json
const writeTasks = (tasks) => {
    try {
        fs.writeFileSync('./day3/miniTask/data.json', JSON.stringify(tasks, null, 2));
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

    tasks.push(newTask);
    console.log("Tasks after adding new task:", tasks);

    writeTasks(tasks); 
    res.status(201).json(newTask);
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
    tasks = tasks.filter(task => task.id !== taskId);
    writeTasks(tasks);
    res.status(204).send();
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
