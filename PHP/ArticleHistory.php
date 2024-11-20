<?php

require_once 'ArticleState.php';

# Caretaker
class ArticleHistory
{
    private array $states = [];

    public function save(ArticleState $state): void
    {
        $this->states[] = $state;
    }

    public function undo(): ?ArticleState
    {
        if (count($this->states) > 1) {
            array_pop($this->states);
            return $this->states[count($this->states) - 1];
        } elseif (count($this->states) === 1) {
            return $this->states[0];
        }
        return null;
    }

    public function getHistory(): array
    {
        return $this->states;
    }
}
