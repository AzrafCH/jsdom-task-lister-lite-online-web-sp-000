document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new taskList();
});

const taskForm = document.getElementById('create-task-form')
const taskList = document.getElementById('list')
const tasks = document.getElementById('tasks')

const submissionForm = document.getElementById("create-task-form")
submissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var newField = document.createElement("li")
  var content = document.createTextNode(e.target.children[1].value)
  newField.appendChild(content);
  list.appendChild(newField)
})
