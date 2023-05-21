<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\DataFixtures\AppFixtures;
use App\Entity\CategorieDeServices;
use App\Entity\Prestataire;
use App\Entity\Recherche;
use App\Form\RechercheType;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\PaginatorInterface;


class RechercheController extends AbstractController
{
    /**
     * @Route("/prestataires", name="app_recherche")
     */
    public function index(Request $request, PaginatorInterface $paginator, ManagerRegistry $doctrine): Response
    {

  
        $donnee_encodee = new Recherche();
        $form = $this->createForm(RechercheType::class, $donnee_encodee);
        $form->handleRequest($request);

        $page = 1;
       

        if($form->isSubmitted() && $form->isValid()) {

            $categorie = [];
            $data = $form->getData();
        
            $id             = $data->getId() ?                  $data->getId()              :  null;
            $presta         = $data->getNomPrestataire() ?      $data->getNomPrestataire()  :  null;
            $categorie      = $data->getTitreCategorie() ?        $data->getTitreCategorie() :  null;
          
            $code_postal    = $data->getCodePostal() ?          $data->getCodePostal()      :  null;
            $commune        = $data->getCommune() ?             $data->getCommune()         :  null;
            $localite       = $data->getLocalite() ?            $data->getLocalite()        :  null;
        ;
            $prestataires = $doctrine->getRepository(Prestataire::class)->prestatairesParRecherche($presta, $categorie, $code_postal, $commune, $localite);

                $prestataires = $paginator->paginate(

                    $doctrine->getRepository(Prestataire::class)->prestatairesParRecherche($presta, $categorie, $code_postal, $commune, $localite),
                    $request->query->get('page', $page),
                    8
    
                );

                
    
                return $this->render('prestataire/prestataires.html.twig', [
                    'prestataires'=>$prestataires,
                ]);
        

         }else if($request->query->get('page')){


            $prestataires = $paginator->paginate(

                $doctrine->getRepository(Prestataire::class)->paginationQuery(),
                $request->query->get('page', $page),
                8

            );

            return $this->render('prestataire/prestataires.html.twig', [
                'prestataires'=>$prestataires,
            ]);
         }

        return $this->render('recherche/_recherche.html.twig', [
            'form'=>$form->createView(),
        ]);
    }

   
 
    
}
