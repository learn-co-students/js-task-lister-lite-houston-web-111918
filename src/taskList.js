class TaskList {
  constructor() {
    this.taskArray = [];
  }

  createTask(content) {
    const newTask = new Task(content);
    this.taskArray.push(newTask);
  }

  renderTaskItem() {
    return this.taskArray.map((task) => task.render()).join("")
  }

  deleteTaskItem(content) {
    this.taskArray = this.taskArray.filter((task) => task.content !== content);
  }

}
