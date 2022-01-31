import ToDoItem from "./ToDoItem";

class ToDoCollection {
    private nextId : number = 1;
    public userName: string;
    public todoItems: ToDoItem[] = [] 

    constructor(userName: string, todoItems: ToDoItem[] = []){
        this.userName = userName
        this.todoItems = todoItems
    }

    getTodoById(id: number): ToDoItem | undefined{
        return this.todoItems.find((item) => item.id === id);
    }

    addTodo(task: string) : number {
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.todoItems.push(new ToDoItem(this.nextId, task, false))
        return this.nextId;
    }

    markComplete(id: number, complete:boolean) : void {
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default ToDoCollection;

