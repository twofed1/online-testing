<?php

namespace App\Repository;

use App\Entity\ResultAnswers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ResultAnswers|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResultAnswers|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResultAnswers[]    findAll()
 * @method ResultAnswers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResultAnswersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResultAnswers::class);
    }

    // /**
    //  * @return ResultAnswers[] Returns an array of ResultAnswers objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ResultAnswers
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
