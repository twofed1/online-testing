<?php

namespace App\Controller;

use App\Entity\Answers;
use App\Entity\Questions;
use App\Form\QuestionsType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class QuestionsController extends AbstractController
{

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     * @throws Exception
     */
    public function newAction(Request $request)
    {
        $question = new Questions();

        $form = $this->createForm(QuestionsType::class, $question);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $question = $form->getData();
            $file = $form->get('imageFileName')->getData();

            if ($file) {
                $fileName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFileName = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $fileName);
                $newFileName = $safeFileName . '-' . uniqid() . '.' . $file->guessExtension();

                try {
                    $file->move(
                        $this->getParameter('images_directory'),
                        $newFileName
                    );
                } catch (FileException $e) {
                    throw new Exception("File error");
                }

                $question->setImageFileName($newFileName);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($question);
            $entityManager->flush();

            return $this->redirectToRoute('questions');
        }

        return $this->render('questions/new.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/questions/remove/{id}", name="question_remove", requirements={"id": "[0-9]+"})
     *
     * @param $id
     * @return RedirectResponse
     */
    public function removeAction($id)
    {
        $question = $this->getDoctrine()->getRepository(Questions::class)->find($id);
        $answers = $this->getDoctrine()->getRepository(Answers::class)->findBy([
            'question_id' => $question->getId()
        ]);
        $entityManager = $this->getDoctrine()->getManager();

        foreach ($answers as $ans) {
            $entityManager->remove($ans);
            $entityManager->flush();
        }

        $entityManager->remove($question);
        $entityManager->flush();

        return $this->redirectToRoute('questions');
    }
}
