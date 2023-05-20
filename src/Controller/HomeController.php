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


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        
        return $this->render('home/home.html.twig', [
            'controller_name' => 'HomeController',
        ]);
        
    }

  
     /**
     * @Route("/prestatairesDumois", name="prestaires_mois")
     */

     public function prestatairesMois(ManagerRegistry $doctrine): Response
     {
   
        $prestataires = $doctrine->getRepository(Prestataire::class)->findAll();
         
        return $this->render('home/prestataires_mois.html.twig', [
            'prestataires_mois' => $prestataires,
        ]);
     }

   


  
    
}
