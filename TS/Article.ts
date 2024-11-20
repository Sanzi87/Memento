import ArticleState from './ArticleState';

// Originator
class Article {
  private title: string;
  private content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  public createState(): ArticleState {
    return new ArticleState(this.title, this.content);
  }

  public restore(state: ArticleState): void {
    if (state) {
      this.title = state.getTitle();
      this.content = state.getContent();
    }
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public toString(): string {
    return `Title: ${this.title}\nContent: ${this.content}`;
  }
}

export default Article;
