import ToDoItem from "./Model/ToDoItem";
import { data } from "./Data";
import ToDoCollection from "./Controller/TodoCollection";

const myTodoCollection: ToDoCollection =  new ToDoCollection("yunseong", data);

console.log(`${myTodoCollection.userName}`);
const allToDoList = myTodoCollection.getTodoItems(true);
allToDoList.forEach((item) => item.printDetails());



