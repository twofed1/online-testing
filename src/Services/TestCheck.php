<?php

namespace App\Services;

use App\Entity\Answers;
use App\Entity\Questions;
use App\Entity\ResultAnswers;
use App\Entity\Results;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestCheck extends AbstractController
{
    public function checkTest($data, $questions, $test)
    {
        $testAnswers = array();
        $results = array();

        foreach ($questions as $question) {
            $answers = $this->getDoctrine()->getRepository(Answers::class)->findBy([
                'question_id' => $question->getId(),
                'is_right' => true
            ]);
            $answers = array_map(function($ans){ return $ans->getText();}, $answers);

            $currId = $question->getId();
            $currType = $question->getType();
            if (isset($data[$currId])) {
                $formAnswers = $data[$currId];

                if($currType == 1) {
                    $rightNotChecked = array_diff($answers, array_values($formAnswers));
                    $wrongChecked = array_diff(array_values($formAnswers), $answers);
                    $testAnswers[$currId] = "Your answer is " . implode(", ", $formAnswers) . "<br>";
                    $testAnswers[$currId] .= "Wrong checked: " . implode(", ", $wrongChecked) . "<br>";
                    $testAnswers[$currId] .= "Not checked: " . implode(", ", $rightNotChecked) . "<br>";
                    $results[$currId] = 1 - count($rightNotChecked) / count($answers);
                } elseif ($currType == 2) {
                    if ($formAnswers != $answers[0]) {
                        $testAnswers[$currId] = "Wrong! Your answer is {$formAnswers} and correct is {$answers[0]}";
                        $results[$currId] = 0;
                    } else {
                        $testAnswers[$currId] = "Your answer {$formAnswers} is correct!";
                        $results[$currId] = 1;
                    }
                } else {
                    if (count($answers) == 1){
                        if (mb_strtolower($answers[0]) == mb_strtolower($formAnswers)) {
                            $testAnswers[$currId] = "Your answer {$formAnswers} is correct!";
                            $results[$currId] = 1;
                        } else {
                            $testAnswers[$currId] = "Wrong! Your answer is {$formAnswers} and correct is {$answers[0]}";
                            $results[$currId] = 0;
                        }
                    } else {
                        $answers = array_map(function($ans){ return mb_strtolower($ans);}, $answers);
                        if (in_array(mb_strtolower($formAnswers), $answers)) {
                            $testAnswers[$currId] = "Your answer {$formAnswers} is correct!";
                            $results[$currId] = 1;
                        } else {
                            $testAnswers[$currId] = "Wrong! Your answer is {$formAnswers} and correct is {$answers[0]}";
                            $results[$currId] = 0;
                        }
                    }
                }
            } else {
                $results[$currId] = 0;
            }

        }

        $res = new Results();
        $res->setTestId($test);

        if($this->getUser() != null){
            $res->setUserId($this->get('security.token_storage')->getToken()->getUser());
        } else {
            $res->setUserId(null);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($res);
        $entityManager->flush();

        foreach ($results as $key => $ans) {
            $resAns = new ResultAnswers();

            $resAns->setResultId($res);
            $resAns->setQuestionId($this->getDoctrine()->getRepository(Questions::class)->find($key));
            $resAns->setAnswer($ans);

            $entityManager->persist($resAns);
            $entityManager->flush();
        }

        return [
            'answers' => $testAnswers,
            'results' => $results
        ];
    }
}