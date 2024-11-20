# Caretaker
class ArticleHistory:
    def __init__(self):
        self.__states = []

    def save(self, state):
        self.__states.append(state)

    def undo(self):
        if len(self.__states) > 1:
            self.__states.pop()
            return self.__states[-1]
        elif len(self.__states) == 1:
            return self.__states[0]
        return None

    def get_history(self):
        return self.__states
