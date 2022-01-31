import ToDoItem from "./ToDoItem";
import { data } from "./Data";
import ToDoCollection from "./TodoCollection";

const myTodoCollection: ToDoCollection =  new ToDoCollection("yunseong", data)

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
