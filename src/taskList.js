class TaskList {
  constructor(){
    this.arr = []
  }

  createTask(content){
    let task = new Task(content)
    this.arr.push(task)
  }

  deleteTask(task) {
    let index = this.arr.indexOf(task)
    this.arr.splice(index,1)
  }
}
