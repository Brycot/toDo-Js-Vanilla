export class listTask {
    showMessage(message, type) {
        const container = document.querySelector('.alert-container');
        const alert = document.createElement('div');
        alert.className = `alert-message-${type}`;
        alert.innerHTML = `
        <div class="alert-message">
        ${message}
        </div>
        `
        container.appendChild(alert)
        setTimeout(() => {
            alert.remove();
        }, 1000);
    }
    resetForm() {
        document.querySelector('.add-menu').reset();
    }
    addTask(ctask) {
        const taskList = document.querySelector('.tasks-main');
        // container
        const container = document.createElement('div');
        container.classList.add("task");
        // check box
        const label = document.createElement('label');
        label.classList.add("container-chekbox__task");
        const input = document.createElement('input');
        input.setAttribute('name', 'check');
        input.setAttribute('type', 'checkbox');
        input.classList.add("check");
        const div = document.createElement('div');
        div.classList.add("checkmark");
        label.append(input,div);
        // texto
        const p = document.createElement('p');
        p.textContent = ctask.text;
        p.classList.add('task-title');
        // eliminar boton
        const a = document.createElement('a');
        a.setAttribute('name', 'delete');
        a.setAttribute('id', 'delete-task');
        a.classList.add('delete-task');
        container.append(label,p,a);
        taskList.appendChild(container);
    }
    deleteTask(cTask) {
        if(cTask.name === 'delete') {
            cTask.parentElement.remove();
            this.showMessage('Task Deleted Successfully', 'info');
        }
    }
    checkedTask(cTask) {
        if(cTask.name === 'check') {
            const container = cTask.parentElement.parentElement;
            container.classList.toggle("complete-task");
            const elements = container.childNodes;
            const text = elements[1];
            text.classList.toggle("complete-title");
        }
    }
}