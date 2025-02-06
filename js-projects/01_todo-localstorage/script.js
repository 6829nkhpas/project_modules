const input=document.getElementById("todo-input");
const task=document.getElementById("add-task-btn");
const listInput=document.getElementById("todo-list");
let tasks=[];

task.addEventListener("click",()=>{
    const taskText=input.value.trim();
    if(taskText ===""){
        alert("Please enter a task");
    }
    const newTask={
        id:  Date.now(),
        text: taskText,
        completed: false,
    }
    tasks.push(newTask);
    input.value="";
    console.log(tasks);

})