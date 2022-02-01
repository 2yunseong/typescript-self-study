"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const myTodoCollection = new TodoCollection_1.default("yunseong", Data_1.data);
console.log(`${myTodoCollection.userName}`);
const allToDoList = myTodoCollection.getTodoItems(true);
allToDoList.forEach((item) => item.printDetails());
