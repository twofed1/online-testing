<?php

namespace App\Controller;

use App\Entity\Answers;
use App\Form\AnswersType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class AnswersController extends AbstractController
{

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function newAction(Request $request) {
        $answer = new Answers();

        $form = $this->createForm(AnswersType::class, $answer);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $answer = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($answer);
            $entityManager->flush();

            return $this->redirectToRoute('answers');
        }

        return $this->render('answers/new.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/answers/remove/{id}", name="answer_remove", requirements={"id": "[0-9]+"})
     *
     * @param $id
     * @return RedirectResponse
     */
    public function removeAction($id)
    {
        $answer = $this->getDoctrine()->getRepository(Answers::class)->find($id);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($answer);
        $entityManager->flush();

        return $this->redirectToRoute('answers');
    }
}
