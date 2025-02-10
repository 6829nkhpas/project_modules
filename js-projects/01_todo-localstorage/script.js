document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const taskbtn = document.getElementById("add-task-btn");
  const listInput = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];
  tasks.forEach((element) => rendertask(element));

  taskbtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    savetasks();
    rendertask(newTask);
    input.value = "";
    console.log(tasks);
  });
  function rendertask(element) {
    const elementItem = document.createElement("li");
    elementItem.setAttribute("data-id", element.id);
    elementItem.innerHTML = `<span>${element.text}</span>
        <button class="delete">Delete</button>`;
    elementItem.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      element.completed = !element.completed;

      elementItem.classList.toggle("completed");

      savetasks();
    });
    elementItem.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((f) => f.id !== element.id);
      elementItem.remove();
      savetasks();
    });

    listInput.appendChild(elementItem);
  }
  function savetasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
