import { ItemCounts } from "../Model/ItemCounts";
import ToDoItem from "../Model/ToDoItem";

class ToDoCollection {
    private nextId : number = 1;
    public userName: string;
    private itemMap: Map<number, ToDoItem> ;

    constructor(userName: string, todoItems: ToDoItem[] = []){
        this.userName = userName
        this.itemMap = new Map<number, ToDoItem>();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }

    getTodoById(id: number): ToDoItem | undefined{
        return this.itemMap.get(id);
    }

    addTodo(task: string): number{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new ToDoItem(this.nextId, task, false))
        return this.nextId;
    }

    getTodoItems(includeComplete: boolean): ToDoItem[]{
        return [...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        )
    }

    removeComplete(): void{
        this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    getItemCounts() : ItemCounts{
        return {
            total: this.itemMap.size, 
            incomplete: this.getTodoItems(false).length,
        };
    }

    markComplete(id: number, complete:boolean) : void {
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default ToDoCollection;

