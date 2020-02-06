<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionsRepository")
 */
class Questions
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
     * @ORM\Column(type="smallint")
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tests", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $test_id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imageFileName;

    protected $answers;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
    }

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

    public function getType(): ?int
    {
        return $this->type;
    }

    /**
     * @param int $type 1 for checkbox, 2 for radio, 3 for text
     * @return $this
     */
    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTestId(): ?Tests
    {
        return $this->test_id;
    }

    public function setTestId(?Tests $test_id): self
    {
        $this->test_id = $test_id;

        return $this;
    }

    public function getImageFileName(): ?string
    {
        return $this->imageFileName;
    }

    public function setImageFileName(?string $imageFileName): self
    {
        $this->imageFileName = $imageFileName;

        return $this;
    }

    public function getAnswers(): ?ArrayCollection
    {
        return $this->answers;
    }

    public function addAnswer(Answers $answers)
    {
        $answers->setQuestionId($this);
        $this->answers->add($answers);
    }

    public function removeAnswer(Answers $answers)
    {
        $this->answers->removeElement($answers);
    }
}
