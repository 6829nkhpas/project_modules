document.addEventListener("DOMContentLoaded",()=>{
    const input=document.getElementById("todo-input");
    const task=document.getElementById("add-task-btn");
    const listInput=document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem(task)) || [];
    tasks.forEach(element => rendertask(element));
        
    
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
        savetasks();
        input.value="";
        console.log(tasks);
    
    })
    function rendertask(){
        console.log("task");

    }
    function savetasks(){
        localStorage.setItem("task",JSON.stringify(tasks));
    }
})