<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        $testsCount = $this->getDoctrine()->getManager()->createQuery('SELECT COUNT(t.id) FROM App\Entity\Tests t')->getResult();
        $questionsCount = $this->getDoctrine()->getManager()->createQuery('SELECT COUNT(q.id) FROM App\Entity\Questions q')->getResult();

        return $this->render('home/index.html.twig', [
            'tests' => $testsCount[0]['1'],
            'questions' => $questionsCount[0]['1']
        ]);
    }
}
