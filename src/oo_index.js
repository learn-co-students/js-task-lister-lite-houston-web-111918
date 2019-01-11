
// document.addEventListener("DOMContentLoaded", () => {
 
//   const taskList = new TaskList();
// });

// Utils:
let s = function(selector){ return document.querySelector(selector) }
let c = function(tagName){ return document.createElement(tagName) }

// HTML Elements: 
let taskInput = s('#new-task-description')
let taskForm = s('#create-task-form')
let taskList = s('#list')
let tasksContainer = s('#tasks')

// Variable Data:
let tasksArr = []

let renderTasks = function(){
  tasksContainer.innerText = ''
  tasksArr.forEach(function(task){
    let taskListItem = c('li')
    let deleteButton = c('button')
    deleteButton.innerText = "X"
    // let x = document.createTextNode('X')
    // deleteButton.appendChild(x)
    taskListItem.innerText = task
    taskListItem.append(deleteButton)
    tasksContainer.append(taskListItem)
    deleteButton.addEventListener('click', function(){
      deleteTask(task)
    })
  })
}

taskForm.addEventListener('submit', function(e){
  e.preventDefault()
  tasksArr.push(taskInput.value)
  taskInput.value = ''
  renderTasks()
})

const deleteTask = function(task){
  // task.preventDefault()
  let index = tasksArr.indexOf(task)
  tasksArr.splice(index,1)
  renderTasks()
}
