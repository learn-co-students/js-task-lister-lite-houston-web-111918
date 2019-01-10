let inputField = document.querySelector('#new-task-description')
let form = document.querySelector('#create-task-form')
let tasks = document.querySelector('#tasks')
let taskList

function render(){
  tasks.innerHTML = ''
  taskList.arr.forEach(function(task){
    let li = document.createElement('li')
    li.innerText = task.content
    tasks.append(li)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  taskList = new TaskList();
});

form.addEventListener('submit', function(e){
  e.preventDefault()
  taskList.createTask(inputField.value)
  inputField.value = ''
  render()
})
