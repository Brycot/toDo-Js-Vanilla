import { listTask } from "./listask.mjs";
import { task } from "./task.mjs";

//importar botones y entorno de HTML a Js
const taskContainer = document.querySelector('.tasks-main');
const deleteButton = document.querySelector('delete-task');
const checkButton = document.querySelector('.check');
const menuAdd = document.querySelector('.add-menu__container');
const sendButton = null || document.querySelector('.send-button');

const listMain = new listTask({});
const taskOne = new task({
    text: "No tengo idea",
})
listMain.creartarea(taskOne);
console.log(listMain);
const sendTask = () => {
    console.log('probando');
}
sendButton.addEventListener('click', sendTask);
