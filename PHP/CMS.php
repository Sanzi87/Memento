<html>

<body>
    <?php
    require_once 'Article.php';
    require_once 'ArticleHistory.php';

    $article = new Article("First Title", "This is the first content of the article.");
    $history = new ArticleHistory();

    // Saving the initial state
    $history->save($article->createState());
    echo "Initial State:<br />";
    echo $article;
    echo "---<br />";

    // Modifying the article
    $article->setTitle("Second Title");
    $article->setContent("This is the second version of the article content.");
    $history->save($article->createState());
    echo "After Modification:<br />";
    echo $article;
    echo "---<br />";

    // Modifying the article again
    $article->setTitle("Third Title");
    $article->setContent("This is the third version of the article content.");
    $history->save($article->createState());
    echo "After Second Modification:<br />";
    echo $article;
    echo "---<br />";

    // Undo the last change
    $previousState = $history->undo();
    if ($previousState !== null) {
        $article->restore($previousState);
    }
    echo "After Undo:<br />";
    echo $article;
    echo "---<br />";

    // Undo again to the original version
    $previousState = $history->undo();
    if ($previousState !== null) {
        $article->restore($previousState);
    }
    echo "After Second Undo:<br />";
    echo $article;

    ?>
</body>

</html>