module.exports = {
    tasks: [],
    completedTasksCount: 0,
    taskIdCounter: 1, // Auto-incrementing task ID starts from 1
    
    // Function to add a new task
    addTask(description, progress, dueDate) {
        const newTask = {
            id: this.taskIdCounter++,
            description: description,
            progress: progress,
            dueDate: new Date(dueDate),
        };
        this.tasks.push(newTask);
        return newTask; // Return the newly added task with auto-incremented ID
    },

    // Function to get an array of all tasks
    getAllTasks() {
        return this.tasks.map(task => ({
            id: task.id,
            description: task.description,
            progress: task.progress,
            dueDate: task.dueDate, 
        }));
    },

    // Function to complete multiple tasks by their IDs
    completeTasks(taskIds) {
        if (!Array.isArray(taskIds)) {
            console.error('taskIds should be an array.');
            return;
        }

        taskIds.forEach(taskId => {
            const taskIndex = this.tasks.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                this.tasks.splice(taskIndex, 1); // Remove the completed task
                this.completedTasksCount++; // Increment completedTasksCount
            }
        });
    },

    // Function to update a task by its ID
    updateTask(taskId, updatedTask) {
        this.tasks = this.tasks.map(task => (task.id === taskId ? updatedTask : task));
    },

    // Function to get a task by its ID
    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    },

    // Function to get tasks based on their status
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.progress === status);
    },
};
