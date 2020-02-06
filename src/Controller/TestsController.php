<?php

namespace App\Controller;

use App\Entity\Answers;
use App\Entity\Questions;
use App\Entity\Tests;
use App\Form\TestsType;
use App\Services\TestCheck;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestsController extends AbstractController
{
    /**
     * @Route("/tests", name="tests")
     */
    public function index()
    {
	    $tests = $this->getDoctrine()->getRepository(Tests::class)->findAll();
        return $this->render('tests/index.html.twig', [
            'tests' => $tests
        ]);
    }

    /**
     * @Route("/tests/{id}", name="test_item", requirements={"id": "[0-9]+"})
     *
     * @param Tests $test
     * @param Request $request
     * @param TestCheck $testCheck
     * @return Response
     */
    public function showAction(Tests $test, Request $request, TestCheck $testCheck)
    {
        if (!$test) {
            throw $this->createNotFoundException(
                'No test with id ' . $test->getId()
            );
        }

        $questions = $this->getDoctrine()->getRepository(Questions::class)->findBy([
            'test_id' => $test->getId()
        ]);

        $answers = array();

        foreach ($questions as $question) {
            $answers[$question->getId()] = $this->getDoctrine()->getRepository(Answers::class)->findBy([
                'question_id' => $question->getId()
            ]);
        }

        if ($request->isMethod('POST')) {
            $data = $request->request->get('answer');

            $checkTestArray = $testCheck->checkTest($data, $questions, $test);
            $testAnswers = $checkTestArray['answers'];
            $results = $checkTestArray['results'];

            return $this->render('tests/result.html.twig', [
                'test' => $test,
                'questions' => $questions,
                'answers' => $testAnswers,
                'results' => $results
            ]);
        }

        return $this->render('tests/show.html.twig', [
            'test' => $test,
            'questions' => $questions,
            'answers' => $answers
        ]);
    }

    /**
     * @Route("/tests/new", name="test_new")
     *
     * param $id
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function newAction(Request $request)
    {
        $test = new Tests();

        $form = $this->createForm(TestsType::class, $test);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){

            $test = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($test);
            $entityManager->flush();

            foreach ($test->getQuestions() as $question) {

                $entityManager->persist($question);
                $entityManager->flush();

                foreach ($question->getAnswers() as $answer) {
                    $entityManager->persist($answer);
                    $entityManager->flush();
                }
            }

            return $this->redirectToRoute('tests');
        }

        return $this->render('tests/new.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/tests/remove/{id}", name="test_remove", requirements={"id": "[0-9]+"})
     *
     * @param $id
     * @return RedirectResponse
     */
    public function removeAction($id)
    {
        $test = $this->getDoctrine()->getRepository(Tests::class)->find($id);
        $questions = $this->getDoctrine()->getRepository(Questions::class)->findBy(['test_id' => $test->getId()]);

        $entityManager = $this->getDoctrine()->getManager();

        foreach ($questions as $quest) {
            $answers = $this->getDoctrine()->getRepository(Answers::class)->findBy(['question_id' => $quest->getId()]);
            foreach ($answers as $ans) {
                $entityManager->remove($ans);
                $entityManager->flush();
            }
            $entityManager->remove($quest);
            $entityManager->flush();
        }

        $entityManager->remove($test);
        $entityManager->flush();

        return $this->redirectToRoute('tests');
    }

}
