"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = __importDefault(require("./Article"));
const ArticleHistory_1 = __importDefault(require("./ArticleHistory"));
const article = new Article_1.default('First Title', 'This is the first content of the article.');
const history = new ArticleHistory_1.default();
// Saving the initial state
history.save(article.createState());
console.log('Initial State:');
console.log(article.toString());
console.log('---');
// Modifying the article
article.setTitle('Second Title');
article.setContent('This is the second version of the article content.');
history.save(article.createState());
console.log('After Modification:');
console.log(article.toString());
console.log('---');
// Modifying the article again
article.setTitle('Third Title');
article.setContent('This is the third version of the article content.');
history.save(article.createState());
console.log('After Second Modification:');
console.log(article.toString());
console.log('---');
// Undo the last change
let previousState = history.undo();
if (previousState) {
    article.restore(previousState);
}
console.log('After Undo:');
console.log(article.toString());
console.log('---');
// Undo again to the original version
previousState = history.undo();
if (previousState) {
    article.restore(previousState);
}
console.log('After Second Undo:');
console.log(article.toString());
