import ToDoItem from "./ToDoItem";

const data: Array<ToDoItem> = [
    new ToDoItem(1, "TS 공부", true),
    new ToDoItem(2, "알고리즘", false),
    new ToDoItem(3, "ProGit", false),
    new ToDoItem(4, "책 사기", false),
]
for(let i = 0; i < data.length; i++){
    data[i].printDetails();
}