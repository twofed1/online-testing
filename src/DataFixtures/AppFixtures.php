<?php

namespace App\DataFixtures;

use App\Entity\Answers;
use App\Entity\Questions;
use App\Entity\Tests;
use App\Entity\User;;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setEmail("admin@dev.com");
        $pass = $this->encoder->encodePassword($admin, 'admin');
        $admin->setPassword($pass);
        $admin->setRoles(["ROLE_ADMIN"]);
        $manager->persist($admin);

        $test1 = new Tests();
        $test1->setName("PHP Quiz");
        $test1->setDescription("You can test your PHP skills with this quiz");
        $manager->persist($test1);

        $question1 = new Questions();
        $question1->setText("How do you write \"Hello World\" in PHP");
        $question1->setType(2);
        $test1->addQuestion($question1);
        $manager->persist($question1);

        $answer11 = new Answers();
        $answer11->setText("echo \"Hello World\";");
        $answer11->setIsRight(true);
        $question1->addAnswer($answer11);
        $manager->persist($answer11);

        $answer12 = new Answers();
        $answer12->setText("Document.Write(\"Hello World\");");
        $answer12->setIsRight(false);
        $question1->addAnswer($answer12);
        $manager->persist($answer12);

        $question2 = new Questions();
        $question2->setText("Which superglobal variable holds information about headers, paths, and script locations?");
        $question2->setType(3);
        $test1->addQuestion($question2);
        $manager->persist($question2);

        $answer21 = new Answers();
        $answer21->setText("\$_SERVER");
        $answer21->setIsRight(true);
        $question2->addAnswer($answer21);
        $manager->persist($answer21);

        $manager->flush();
    }
}
