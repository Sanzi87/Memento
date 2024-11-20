"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Caretaker
class ArticleHistory {
    constructor() {
        this.states = [];
    }
    save(state) {
        this.states.push(state);
    }
    undo() {
        if (this.states.length > 1) {
            this.states.pop();
            return this.states[this.states.length - 1];
        }
        else if (this.states.length === 1) {
            return this.states[0];
        }
        return null;
    }
    getHistory() {
        return this.states;
    }
}
exports.default = ArticleHistory;
