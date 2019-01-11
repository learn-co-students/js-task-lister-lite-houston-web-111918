

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const newForm = document.getElementById('create-task-form');
  const newContent = document.getElementById('new-task-description');
  const taskListTag = document.getElementById('tasks');

  const renderPage = function() {
    taskListTag.innerHTML = taskList.renderTaskItem()
  };

  newForm.addEventListener("submit", function(e) {
    e.preventDefault();
    taskList.createTask(newContent.value);
    e.target.reset();
    renderPage();
  });

  taskListTag.addEventListener("click", function(e) {
    if (e.target) {
      taskList.deleteTaskItem(e.target.dataset.content);
      renderPage();
    }
  })

});
