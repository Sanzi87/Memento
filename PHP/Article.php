<?php

require_once 'ArticleState.php';

# Originator
class Article
{
    private string $title;
    private string $content;

    public function __construct(string $title, string $content)
    {
        $this->title = $title;
        $this->content = $content;
    }

    public function createState(): ArticleState
    {
        return new ArticleState($this->title, $this->content);
    }

    public function restore(ArticleState $state): void
    {
        $this->title = $state->getTitle();
        $this->content = $state->getContent();
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function __toString(): string
    {
        return "Title: {$this->title}<br />Content: {$this->content}<br />";
    }
}
