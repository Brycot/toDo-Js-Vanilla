export class task {
    constructor({
        state = false,
        text = '',
    })
    {
        this.state = state;
        this.text = text;
    }

    taskComplete() {
        this.state = true;
    }
}