<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ResultAnswersRepository")
 */
class ResultAnswers
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Results")
     * @ORM\JoinColumn(nullable=false)
     */
    private $result_id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Questions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $question_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $answer;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAnswer(): ?string
    {
        return $this->answer;
    }

    public function setAnswer($answer): self
    {
        $this->answer = $answer;

        return $this;
    }

    public function getResultId(): ?Results
    {
        return $this->result_id;
    }

    public function setResultId(?Results $result_id): self
    {
        $this->result_id = $result_id;

        return $this;
    }
}
