class TaskList {
  constructor(){
    this.arr = []
  }

  createTask(content){
    let task = new Task(content)
    this.arr.push(task)
  }
}
