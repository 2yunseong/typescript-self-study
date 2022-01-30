"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoItem_1 = __importDefault(require("./ToDoItem"));
const data = [
    new ToDoItem_1.default(1, "TS 공부", true),
    new ToDoItem_1.default(2, "알고리즘", false),
    new ToDoItem_1.default(3, "ProGit", false),
    new ToDoItem_1.default(4, "책 사기", false),
];
for (let i = 0; i < data.length; i++) {
    data[i].printDetails();
}
