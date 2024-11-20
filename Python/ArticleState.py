# Memento
class ArticleState:
    def __init__(self, title, content):
        self.__title = title
        self.__content = content

    @property
    def title(self):
        return self.__title

    @property
    def content(self):
        return self.__content
