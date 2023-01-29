<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/categ", name="plusDeCateg", methods="GET")
     */

    public function plusDeCategories(ManagerRegistry $doctrine): Response
    {
        $categories = $doctrine->getRepository(CategorieDeServices::class)->findAll();
        return $this->json($categories);
        
        return $this->redirectToRoute('home');
 
    }

     // Methode pour récupérer la catégorie du mois
}
