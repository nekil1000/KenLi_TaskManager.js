# Task Manager Module
The Task Manager Module is a JavaScript module that provides functionality for managing tasks. It includes features such as adding tasks, retrieving tasks, completing tasks, updating tasks, and querying tasks based on their status.

## Getting Started
Follow these steps to integrate the Task Manager Module into your project:

### 1. Download the Module:

Download the taskManager.js file from this repository.
### 2. Import the Module:

In your project, import the taskManager.js module using "require"
 - Copy code
```bash
const taskManager = require('./path/to/taskManager');
```
### 3. Usage:

Start using the provided functions to manage your tasks. Here are some examples:


 - Copy code 
```bash
// Add a new task
const newTask = taskManager.addTask('Complete assignment', 'In progress', '2023-12-01');
```
```bash
// Get all tasks
const allTasks = taskManager.getAllTasks();
```
```bash
// Complete tasks by their IDs
taskManager.completeTasks([1, 3]);
```
```bash
// Update a task by its ID
const updatedTask = taskManager.updateTask(2, { description: 'Updated task', progress: 'Completed' });
```
```bash
// Get a task by its ID
const taskById = taskManager.getTaskById(4);
```
```bash
// Get tasks by their status
const inProgressTasks = taskManager.getTasksByStatus('In progress');
```
## Functionality

The module provides the following functions:
- addTask(description, progress, dueDate): Adds a new task.
- getAllTasks(): Retrieves an array of all tasks.
- completeTasks(taskIds): Completes multiple tasks by their IDs.
- updateTask(taskId, updatedTask): Updates a task by its ID.
- getTaskById(taskId): Retrieves a task by its ID.
- getTasksByStatus(status): Retrieves tasks based on their status.
## Additional Notes
Ensure that the "dueDate" parameter is provided in the format specified by your application.

The completeTasks function takes an array of task IDs to complete. Make sure to pass an array when using this function.

Error handling is included for some functions to provide feedback in case of incorrect usage.

Feel free to customize the module based on your specific requirements and integrate it into your project as needed. :D
