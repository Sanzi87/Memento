import ArticleState from './ArticleState';

// Caretaker
class ArticleHistory {
  private states: ArticleState[] = [];

  public save(state: ArticleState): void {
    this.states.push(state);
  }

  public undo(): ArticleState | null {
    if (this.states.length > 1) {
      this.states.pop();
      return this.states[this.states.length - 1];
    } else if (this.states.length === 1) {
      return this.states[0];
    }
    return null;
  }

  public getHistory(): ArticleState[] {
    return this.states;
  }
}

export default ArticleHistory;
