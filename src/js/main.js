import { listTask } from "./listask.mjs";
import { Task } from "./task.mjs";

//importar botones y entorno de HTML a Js




document.querySelector('.add-menu')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const textTask = document.getElementById('text').value;

        const cTask = new Task({
            text: textTask,
        });
        const lTask = new listTask();
        if(textTask === '') {
            return lTask.showMessage('Enter Task', 'fail');
        }
        lTask.addTask(cTask);
        lTask.showMessage('Task Added Succesfully', 'success');
        lTask.resetForm();

    });
document.querySelector('.tasks-main')
    .addEventListener('click', (e) => {
        const lTask = new listTask();
        lTask.deleteTask(e.target);
    });
document.querySelector('.tasks-main')
    .addEventListener('click', (e) => {
        const lTask = new listTask();
        lTask.checkedTask(e.target);
    })
