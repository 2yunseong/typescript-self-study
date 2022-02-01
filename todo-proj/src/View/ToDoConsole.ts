import * as inquirer from 'inquirer';
import ToDoCollection from '../Controller/TodoCollection';
import ToDoItem from '../Model/ToDoItem';

class TodoConsole{
    private todoCollection : ToDoCollection;

    constructor(){
        const sampleTodos: ToDoItem[] = data.map(
            (item) => new ToDoItem(item.id, item.task, item.complete)
        );
        this.todoCollection = new ToDoCollection('My Todo List');
    }

    displayTodoList(): Void {
    
    }
}