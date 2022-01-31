"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoItem {
    constructor(id, task, complete) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t[ ${this.complete ? "v ]" : "  ]"}`);
    }
}
exports.default = ToDoItem;
