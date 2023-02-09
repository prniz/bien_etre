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
    public function index(Request $request,ManagerRegistry $doctrine): Response
    {
        
        $prestataires = $doctrine->getRepository(Prestataire::class)->findAll();

        $donnee_encodee = new Recherche();
        $form = $this->createForm(RechercheType::class, $donnee_encodee);
        $form->handleRequest($request);

        
        if ($form->isSubmitted() && $form->isValid()) {
            
            $donnee_encodee = $form->getData();
            // $categorie = $form->get("categorie")->getData();
            // dd($donnee_encodee);

            $donnee_prestataire = $doctrine->getRepository(Recherche::class)->findPrestataires($donnee_encodee->getNomPrestataire());
            $donnee_categorie = $doctrine->getRepository(Recherche::class)->findOneByNomCategorie($donnee_encodee->getNomCategorie());
            // $donnee_trouvee = $doctrine->getRepository()
            if($donnee_trouvee != ''){
                dd($donnee_trouvee);
            }
         }

        return $this->render('home/home.html.twig', [
            'prestataires' => $prestataires,
            'form'=>$form->createView(),
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


  
    
}
