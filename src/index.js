document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new taskList();
});

const taskForm = document.getElementById("create-task-form")

function removeBtn () {

}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newField = document.createElement("li")
  let content = document.createTextNode(e.target.children[1].value)
  let removeBtn = document.createElement("BUTTON")
  removeBtn.innerHTML = "Remove";

  newField.appendChild(content);
  list.appendChild(newField, removeBtn)
})
