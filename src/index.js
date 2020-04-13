document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new taskList();
});

const taskForm = document.getElementById('create-task-form')
const taskList = document.getElementById('list')
const tasks = document.getElementById('tasks')

taskForm.addEventListener("submit", (e) {
  e.preventDefault()
  const taskInput = taskForm["new-task-description"].value

  tasks.innerHTML += `<li id = "${taskInput}"> ${taskInput} </li>`

  taskForm["new-task-description"].value = ""
});

tasks.addEventListener("click", (e) {
  clickMe(e);
});
