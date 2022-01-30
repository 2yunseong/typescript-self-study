class ToDoItem{
    public id: number;      // private, public, protected
    public task: string;
    public complete: boolean;

    constructor(id: number, task: string, complete: boolean){
        this.id = id
        this.task = task
        this.complete = complete
    }

    printDetails(): void{
        console.log(`${this.id}\t${this.task}\t[ ${this.complete ? "v ]" : "  ]"}`);
    }
}


export default ToDoItem;