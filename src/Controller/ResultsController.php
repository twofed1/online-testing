<?php

namespace App\Controller;

use App\Entity\ResultAnswers;
use App\Entity\Results;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ResultsController extends AbstractController
{
    /**
     * @Route("/results", name="results")
     */
    public function index()
    {
        if ($this->getUser() && in_array("ROLE_ADMIN", $this->getUser()->getRoles())) {
            $results = $this->getDoctrine()->getRepository(Results::class)->findAll();
        } else {
            $results = $this->getDoctrine()->getRepository(Results::class)->findBy(
                ['user_id' => $this->getUser()]
            );
        }

        $answers = array();

        foreach($results as $result) {
            $answers[$result->getId()] = $this->getDoctrine()->getRepository(ResultAnswers::class)->findBy([
                'result_id' => $result->getId()
            ]);
        }

        return $this->render('results/index.html.twig', [
            'results' => $results,
            'answers' => $answers
        ]);
    }
}
