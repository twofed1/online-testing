<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnswersRepository")
 */
class Answers
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $text;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_right;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Questions", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $question_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getIsRight(): ?bool
    {
        return $this->is_right;
    }

    public function setIsRight(bool $is_right): self
    {
        $this->is_right = $is_right;

        return $this;
    }

    public function getQuestionId(): ?Questions
    {
        return $this->question_id;
    }

    public function setQuestionId(?Questions $question_id): self
    {
        $this->question_id = $question_id;

        return $this;
    }
}
