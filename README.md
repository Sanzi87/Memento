# Article State Manager

An Example of the Memento Design Pattern in Multiple Programming Languages

## What is the Memento Design Pattern?

The Memento Design Pattern is a behavioral design pattern that allows you to capture and save an object's state so that it can be restored later without violating encapsulation. This is particularly useful in scenarios where you need undo or rollback functionality.
The pattern consists of three key components:

1. **Originator:** The object whose state needs to be saved.
2. **Memento:** A representation of the saved state of the Originator.
3. **Caretaker:** The object that manages the saved states (Mementos) and facilitates restoration.

## About This Project

"Article State Manager" demonstrates the Memento Design Pattern by implementing a system to save and restore the states of an article during its creation or editing process. This project is implemented in Python, PHP, JavaScript, and TypeScript, allowing for a cross-language comparison of the pattern's implementation.
Each implementation has a structured folder with the following files:

### Folder Structure

- **Article (Originator):** Represents an article that contains its content and metadata. It provides the mechanism to save its state and restore from a saved state.
- **ArticleState (Memento):** Encapsulates the state of the Article at a given moment in time.
- **ArticleHistory (Caretaker):** Manages the history of states (a collection of ArticleState objects) and provides methods to save or restore an article's state.
- **CMS:** Simulates a Content Management System (CMS) that demonstrates the functionality of saving, modifying and restoring article states.

### Key Features

1. **Save Article State:** Save the current state of an article into the history.
2. **Restore Article State:** Roll back to a previously saved state of the article.
3. **Cross-Language Example:** Implemented in Python, PHP, JavaScript, and TypeScript for learning and comparison.

## How to Use This Project

### Step 1: Navigate to the Desired Language Folder

The project is organized by language into the following folders:

- Python/
- PHP/
- JS/
- TS/

### Step 2: Run the Example in the Desired Language

Inside each folder, you'll find the files listed in the folder structure. You can execute the code for the specific language to observe how the Memento pattern works.
For example:

- Python: python CMS.py
- PHP: Execute CMS.php
- JavaScript: node CMS.js
- TypeScript: Compile and run CMS.ts or install ts-node TypeScript execution engine "npm install -g ts-node" and run "ts-node CMS.ts"
