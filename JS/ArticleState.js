"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Memento
class ArticleState {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
}
exports.default = ArticleState;
