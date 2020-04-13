document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new taskList();
});

const submissionForm = document.getElementById("create-task-form")

submissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newField = document.createElement("li")
  let content = document.createTextNode(e.target.children[1].value)
  newField.appendChild(content);
  list.appendChild(newField)
})
