import { listTask } from "./listask.mjs";
import { task } from "./task.mjs";

//importar botones y entorno de HTML a Js
const taskContainer = null || document.querySelector('.tasks-main');
const deleteButton = null || document.querySelector('.delete-task');
const checkButton = null || document.querySelector('.check');
const textTask = null || document.getElementById('text');
const sendButton = null || document.querySelector('.send-button');

const listMain = new listTask({});


const addTask = () => {
    const text = textTask.value;
    const cTask = new task({text: `${text}`});
    listMain.creartarea(cTask);
    let view =  `
        <section class="tasks-main__container">
            <div class="task">
                <label class="container-chekbox__task">
                    <input class="check" checked="checked" type="checkbox">
                    <div class="checkmark"></div>
                </label>
                <p class="task-title">${cTask.text}</p>
                <a class="delete-task" id='delete-task' ></a>
            </div>
        </section>
    `
    taskContainer.innerHTML += view;
}

sendButton.addEventListener('click', addTask);
