<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\DataFixtures\AppFixtures;
use App\Entity\CategorieDeServices;
use App\Entity\Prestataire;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;


class CategorieController extends AbstractController
{
    /**
     * @Route("/categorie", name="app_categorie")
     */

    public function index(ManagerRegistry $doctrine): Response
    {
      
        $categories = $doctrine->getRepository(CategorieDeServices::class)->findAll();

        return $this->render('categorie/categorie.html.twig', [
            'categories' => $categories,
           
        ]);

    }

     /**
     * @Route("/categorie/{param}", name="plusDeCateg", methods="GET")
     */

    public function plusDeCategories($param, Request $request, ManagerRegistry $doctrine): Response
    {
        $categories = $doctrine->getRepository(CategorieDeServices::class)->findAll();

        $data = array();
        foreach($categories as $key => $val){

            $data[$key]["nom"] = $val->getNom();
        }

        if($param == 'plus'){
            
            return $this->json($data);
        }

 
    }

      
   

     // Methode pour récupérer la catégorie du mois
}
