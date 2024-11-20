"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleState_1 = __importDefault(require("./ArticleState"));
// Originator
class Article {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    createState() {
        return new ArticleState_1.default(this.title, this.content);
    }
    restore(state) {
        if (state) {
            this.title = state.getTitle();
            this.content = state.getContent();
        }
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    toString() {
        return `Title: ${this.title}\nContent: ${this.content}`;
    }
}
exports.default = Article;
