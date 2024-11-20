from ArticleState import ArticleState

# Originator


class Article:
    def __init__(self, title, content):
        self.__title = title
        self.__content = content

    def create_state(self):
        return ArticleState(self.__title, self.__content)

    def restore(self, state):
        if state:
            self.__title = state.title
            self.__content = state.content

    @property
    def title(self):
        return self.__title

    @title.setter
    def title(self, value):
        self.__title = value

    @property
    def content(self):
        return self.__content

    @content.setter
    def content(self, value):
        self.__content = value

    def __str__(self):
        return f"Title: {self.__title}\nContent: {self.__content}"
