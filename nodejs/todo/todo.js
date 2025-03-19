
const fs = require("fs");
const path = "./tasks.json"

const command= process.argv[2];
const argument= process.argv[3];

const addTask = (arg) => {
const tasks = loadTasks();
tasks.push(arg);
saveTask(tasks);
console.log("task added" + arg);

};
function saveTask(tasks){
    const data = JSON.stringify(tasks);
    fs.writeFileSync(path,data);
}
const loadTasks = ()=>{
    try {
        const dataBuffer = fs.readFileSync(path);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
      } catch (error) {
        return [];
      }
};
const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
  };
  
if (command === "add") {
    addTask(argument);
  } else if (command === "list") {
    listTasks();
  } else if (command === "remove") {
    removeTask(parseInt(argument));
  } else {
    console.log("Command not found !");
  }