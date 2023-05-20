<?php

namespace App\Repository;

use App\Entity\Prestataire;
use App\Entity\Utilisateur;
use App\Entity\CategorieDeServices;
use App\Entity\CodePostal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\Expr\Join;



/**
 * @extends ServiceEntityRepository<Prestataire>
 *
 * @method Prestataire|null find($id, $lockMode = null, $lockVersion = null)
 * @method Prestataire|null findOneBy(array $criteria, array $orderBy = null)
 * @method Prestataire[]    findAll()
 * @method Prestataire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrestataireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Prestataire::class);
    }

    public function add(Prestataire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Prestataire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function prestatairesAvecIdemCategories($value){

        $qb =  $this->createQueryBuilder('p')
            ->from('App\Entity\CategorieDeServices', 'c')
            ->innerJoin('c.prestataire', 'i')
            ->andwhere('i.id LIKE p.id')
            ->andWhere('c.nom IN (:val)')
            ->setParameter('val', $value)
            ->groupBy('p.nom')
            ->orderBy('p.nom', 'ASC')
            ->getQuery()
            ->getResult();
        
            return $qb;

    }


    public function prestatairesParRecherche($valuePrestataire = null, $valueCateg = null, $valueCodePostal = null, $valueCommune = null, $valueLocalite = null){

        if(is_null($valuePrestataire) && is_null($valueCateg) && is_null($valueCodePostal) && is_null($valueCommune) && is_null($valueLocalite)){

         
            $qb =  $this->createQueryBuilder('p')
            ->orderBy('p.nom', 'ASC')
            ->getQuery()
            ->getResult();

            return $qb;

        }else{

            if(!is_null($valuePrestataire)){

               
                $qb =  $this->createQueryBuilder('p')
                ->where('p.nom LIKE :valP')
                ->setParameter('valP', $valuePrestataire.'%');

    
                if($valueCateg != null){

    
                    $qb->from('App\Entity\CategorieDeServices', 'c')
                        ->innerJoin('c.prestataire', 'i')
                        ->andwhere('i.id LIKE p.id')
                        ->andWhere('c.nom IN (:val)')
                        ->setParameter(':val', $valueCateg, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY);
                        
    
                }
    
                if($valueCodePostal != null){
                    $qb->innerJoin(Utilisateur::class, 'u', 'WITH', 'u.prestataire = p.id')
                    ->innerJoin(CodePostal::class, 'cp', 'WITH', 'cp.id = u.codePostal')
                    ->andWhere('cp.codePostal = :valC')
                     ->setParameter('valC', $valueCodePostal);
                }
    
                if($valueCateg != null && $valueCodePostal != null){
    
                    $qb->andWhere('c.nom IN (:val)')
                        ->setParameter(':val', $valueCateg, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)
                        ->setParameter('valC', $valueCodePostal);
    
                }
    
                return $qb->getQuery()->getResult();
    
    
                // Requete si valeur entrée égale au nom de catégorie
    
            }else if($valueCateg != null){
    
                
                $qb = $this->createQueryBuilder('p')
                    ->select('p')  
                    ->from('App\Entity\CategorieDeServices', 'c')
                    ->innerJoin('c.prestataire', 'i')
                    ->andwhere('i.id LIKE p.id')
                    ->andWhere('c.nom IN (:val)')
                    ->setParameter(':val', $valueCateg, \Doctrine\DBAL\Connection::PARAM_STR_ARRAY);
                   
    
                    if($valueCodePostal != null){
                        $qb->innerJoin(Utilisateur::class, 'u', 'WITH', 'u.prestataire = p.id')
                        ->innerJoin(CodePostal::class, 'cp', 'WITH', 'cp.id = u.codePostal')
                        ->andWhere('cp.codePostal = :valC')
                         ->setParameter('valC', $valueCodePostal);
                    }
    
               return $qb->getQuery()->getResult();
        
    
                // Requête si valeur entrée égale au code postal
    
            }else if($valueCodePostal != null){
    
    
                $qb =  $this->createQueryBuilder('p')
                        ->select('p')
                        ->innerJoin(Utilisateur::class, 'u', 'WITH', 'u.prestataire = p.id')
                        ->innerJoin(CodePostal::class, 'cp', 'WITH', 'cp.id= u.codePostal')
                        ->andWhere('cp.codePostal LIKE :val')
                        ->setParameter('val', $valueCodePostal)
                        ->orderBy('p.nom', 'ASC')
                        ->getQuery()
                        ->getResult();
    
                        return $qb;
    
            }else if($valuePrestataire != null AND $valueCodePostal != null){
    
             
    
                $qb =  $this->createQueryBuilder('p')
                ->select('p')  
                ->innerJoin(Utilisateur::class, 'u', 'WITH', 'u.prestataire = p.id')
                ->innerJoin(CodePostal::class, 'cp', 'WITH', 'cp.id = u.codePostal')
                ->andWhere('p.nom = :val')
                ->andWhere('cp.codePostal = :val')
                ->setParameter('val', $valuePrestataire.'%') 
                ->setParameter('val', $valueCodePostal) 
                ->getQuery()
                ->getResult();

                return $qb;
        }

     

             
        
            
           

            // $qb = $this->getEntityManager()->createQuery(

            //     "
            //         SELECT prestataire.nom
            //         FROM App\Entity\prestataire
            //         INNER JOIN utilisateur ON prestataire.id LIKE utilisateur.prestataire_id
            //         INNER JOIN code_postal ON code_postal.id LIKE utilisateur.code_postal_id
            //         WHERE prestataire.nom LIKE :valP AND code_postal.code_postal LIKE :valC
              
            //     ")

            //     ->setParameters(array('valP'=>$valuePrestataire.'%', 'valC'=>$valueCodePostal)) 
            //     ->orderBy('p.nom', 'ASC')
            //     ->getQuery()
                // ->getArrayResult();
            

            
        }


            // $qb->createQuery("SELECT prestataire.nom, categorie_de_services.nom, code_postal.code_postal
            //                     FROM prestataire
            //                     INNER JOIN categorie_de_service ON categorie_de_services.id LIKE prestataire.id
            //                     INNER JOIN utilisateur ON prestataire.id LIKE utilisateur.prestataire_id
            //                     INNER JOIN code_postal ON code_postal.id LIKE utilisateur.code_postal_id
            //                     INNER JOIN commune ON commune.id LIKE utilisateur.commune_id 
            //                     INNER JOIN localite ON localite.id LIKE utilisateur.localite_id
            
            //                     WHERE prestataire.nom LIKE $valuePrestataire 
            //                     AND categorie_de_services.nom LIKE $valueCateg 
            //                     AND code_postal.code_postal LIKE $valueCodePostal 
            //                     AND commune.commune LIKE $valueCommune 
            //                     AND localite.localite LIKE $valueLocalite");
            // return $qb;

        // }else if($valuePrestataire != null && $valueCateg && $valueCodePostal && $valueCommune && $valueLocalite){

        //     return $this->createQueryBuilder('p')
        //         ->andWhere('p.nom = :val')
        //         ->setParameter('val', $valuePrestataire."%")
        //         ->orderBy('p.nom', 'ASC')
        //         ->getQuery()
        //         ->getResult();
        // }
    }


   public function paginationQuery()
   {
       return $this->createQueryBuilder('p')
          ->orderBy('p.nom')
           ->getQuery()
          
       ;
   }
}
