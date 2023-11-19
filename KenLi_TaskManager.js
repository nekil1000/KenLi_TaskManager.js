

module.exports = {
     tasks : [],
    addTask(id , description , progress) {
        this.tasks.push({id : id, description : description , progress : progress});
    },

    getAllTasks() {
        return this.tasks.map(task => ({ id: task.id, description: task.description, progress: task.progress }));
    },

    completeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    updateTask(taskId, updatedTask) {
        this.tasks = this.tasks.map(task => (task.id === taskId ? updatedTask : task));
    },

    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    },

    getTasksByStatus(status) {
        return this.tasks.filter(task => task.progress === status);
    },

   
}

