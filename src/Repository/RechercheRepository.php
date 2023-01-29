<?php

namespace App\Repository;

use App\Entity\Recherche;
use App\Entity\Prestataire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Recherche>
 *
 * @method Recherche|null find($id, $lockMode = null, $lockVersion = null)
 * @method Recherche|null findOneBy(array $criteria, array $orderBy = null)
 * @method Recherche[]    findAll()
 * @method Recherche[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RechercheRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Recherche::class);
    }

    public function add(Recherche $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Recherche $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByNom($value): array
    {    
         $qb = $this->getEntityManager()->createQueryBuilder();
 
         return $qb->select('r')
             ->from('App\Entity\Prestataire','r')
            ->andWhere('r.nom LIKE :val')
            ->setParameter('val', $value."%")
            ->orderBy('r.nom', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }

//    /**
//     * @return Recherche[] Returns an array of Recherche objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Recherche
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
