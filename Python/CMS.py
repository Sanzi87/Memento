from Article import Article
from ArticleHistory import ArticleHistory

# Creating a new article
article = Article("First Title", "First version of the article...")
history = ArticleHistory()

# Saving the initial state
history.save(article.create_state())
print("Initial State:")
print(article)
print("---")

# Modifying the article
article.title = "Second Title"
article.content = "Second version of the article."
history.save(article.create_state())
print("After Modification:")
print(article)
print("---")

# Modifying the article again
article.title = "Third Title"
article.content = "Third version of the article."
history.save(article.create_state())
print("After Second Modification:")
print(article)
print("---")

# Undo the last change
article.restore(history.undo())
print("After Undo:")
print(article)
print("---")

# Undo again to the original version
article.restore(history.undo())
print("After Second Undo:")
print(article)
