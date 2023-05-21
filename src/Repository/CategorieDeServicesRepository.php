<?php

namespace App\Repository;

use App\Entity\CategorieDeServices;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategorieDeServices>
 *
 * @method CategorieDeServices|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorieDeServices|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorieDeServices[]    findAll()
 * @method CategorieDeServices[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorieDeServicesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorieDeServices::class);
    }

    public function add(CategorieDeServices $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategorieDeServices $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

 

   /**
    * @return CategorieDeServices[] Returns an array of CategorieDeServices objects
    */
   public function findByCategories($value): array
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.nom = :val')
           ->setParameter('val', $value)
           ->orderBy('c.nom', 'ASC')
           ->setMaxResults(10)
           ->getQuery()
           ->getResult()
       ;
   }

   public function CategorieDuMois(int $value): ?CategorieDeServices
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.enAvant = :val')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }
}
