export class listTask {
    constructor ({
        tareas = [],
    })
    {
        this.tareas = tareas;
    }

    creartarea(tarea = {}) {
        this.tareas.push(tarea);
    }
    eliminartarea(tarea) {
        this.tareas.splice(this.tareas.indexOf(tarea),1)
    }
}