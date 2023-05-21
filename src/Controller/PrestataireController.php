<?php

namespace App\Controller;

use App\Entity\Prestataire;
use App\Entity\Utilisateur;
use App\Entity\CodePostal;
use App\Entity\Commune;
use App\Entity\Localite;
use App\Entity\Images;
use App\Entity\CategorieDeServices;
use App\Entity\Stage;
use App\Form\PrestataireType;
use App\Form\StageType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\UtilisateurRepository;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Constraints as Assert;
use DateTimeInterface;


class PrestataireController extends AbstractController
{
    
    private $mailer;
    private $verifyEmailHelper;

    public function __construct(MailerInterface $mailer, VerifyEmailHelperInterface $helper){

        $this->mailer = $mailer;
        $this->verifyEmailHelper = $helper;
    }


    /**
     * @Route("/prestataire", name="app_prestataire")
     */
    public function prestataires(Request $request,ManagerRegistry $doctrine): Response
    {
        
        $prestataires = $doctrine->getRepository(Prestataire::class)->findAll();

        return $this->render('prestataire/prestataires.html.twig', [
            'prestataires' => $prestataires,
        ]);
    }

    
    /**
     * @Route("/pre_inscription_prestataire", name="app_preRegister_prestataire")
     */

    public function preInscriptionPrestataire(Request $request, MailerInterface $mailer, ManagerRegistry $doctrine, UserPasswordHasherInterface $userPasswordHasher): Response 
    {
        // Ajout de l'admin dans la base de données

        // $entityManager = $this->getDoctrine()->getManager();
        
        // $admin = new Utilisateur();
        // $admin->setEmail('admin@admin.be');
        // $password = 'admin';
        // $admin->setRoles(array('ROLE_ADMIN'));

       
        // $hashedPassword = $userPasswordHasher->hashPassword(
        //             $admin,
        //             $password);
      
        // $admin->setPassword($hashedPassword);


        // $entityManager->persist($admin);
        // $entityManager->flush();


        
        $utilisateur = new Utilisateur();
        $utilisateur->setRoles(array('prestataire'));
        $prestataire = new Prestataire();

        $form = $this->createFormBuilder()
            ->add('Nom', TextType::class, [
                'label'=>'Nom',
            ])
            ->add('Email', EmailType::class, [
                'label'=>'Email',
                'constraints' => [
                    new Assert\Email([
                        'message' => 'veuillez remplir l\'email au bon format'
                    ]),
                ]
            ])
            ->add('Envoyer', SubmitType::class)
            ->getForm();


        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){

            $data = $form->getData();
            $mail_prestataire = $data["Email"];
            $utilisateur->setEmail($mail_prestataire);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($utilisateur);
            $entityManager->flush();
           
            $signatureComponents = $this->verifyEmailHelper->generateSignature(

                'app_Register_prestataire',
                $utilisateur->getId(),
                $utilisateur->getEmail(),
               
                ['id' => $utilisateur->getId(),
                'email'=>$utilisateur->getEmail()
                ]
               

            );


            $email = new TemplatedEmail();
            $email->from('from@example.com');
            $email->to($utilisateur->getEmail());
            $email->context(['id' => $utilisateur->getId(),'utilisateur'=>$utilisateur]);
            $email->htmlTemplate('registration/mail.html.twig');
            

            $this->mailer->send($email);
            $this->addFlash('success','mail envoyé avec succès');
            return $this->redirectToRoute('app_preRegister_prestataire');

        }

        return $this->render('registration/Preinscription_prestataire.html.twig', [
            'form' => $form->createView(),
        ]);
    }


     /**
     * @Route("/inscription_prestataire/{id}", name="app_Register_prestataire")
     */

     public function registerPrestataire($id, Request $request, UserPasswordHasherInterface $utilisateurPasswordHasher, VerifyEmailHelperInterface $verifyEmailHelper, SluggerInterface $slugger, ManagerRegistry $doctrine): Response 
     {

        $entityManager = $this->getDoctrine()->getManager();

        $prestataire = new Prestataire();
        $code_postal = new CodePostal();
        $commune = new Commune();
        $localite = new Localite();

        $utilisateur = $doctrine->getRepository(Utilisateur::class)->find($id);

        $form = $this->createForm(PrestataireType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){

           $data = $form->getData();

           $nom                 = $data["Nom"];
           $description         = $data["Description"];
           $images              = $data["Photo"];
          
           $gsm                 = $data["GSM"];
           $tva                 = $data["TVA"];
           $site                = $data["Site"];
           $rue                 = $data["Rue"];
           $numero              = $data["Numero"];
           $cp                  = $data["codepostal"];
           $comm                = $data["commune"];
           $local               = $data["localite"];
           $motDePasse          = $data["Password"];
           $categories          = $data["Categorie"];
          


           $prestataire->setNom($nom);
           $prestataire->setDescription($description);
           $prestataire->setNumTVA($tva);
           $prestataire->setSiteInternet($site);
           $prestataire->setNumTel($gsm);

           foreach($images as $image){


                // On génère un nouveau nom de fichier
                $fichier = md5(uniqid()).'.'.$image->guessExtension();
                
                // On copie le fichier dans le dossier uploads
               
                    $image->move(
                        $this->getParameter('images_directory'),
                        $fichier
                );
            
                // On crée l'image dans la base de données
                
                $img = new Images();
                $img->setNomImage($fichier);
                
                $prestataire->addImage($img);
                
            }

       
        //   $entityManager->persist($prestataire);

            foreach($categories as $categorie){
                $prestataire->addCategorieDeService($categorie);
                $categorie->addPrestataire($prestataire);

                $entityManager->persist($categorie);
            }
    

            $code_postal->setCodePostal($cp);
            $commune->setCommune($comm);
            $localite->setLocalite($local);


           $utilisateur->setDateInscription(new \DateTime());
           $utilisateur->setTypeUtilisateur('prestataire');
           $utilisateur->setInscriptConf(true);
           $utilisateur->setAdresseRue($rue);
           $utilisateur->setAdresseNum($numero);
           $utilisateur->setCodePostal($code_postal);
           $utilisateur->setCommune($commune);
           $utilisateur->setLocalite($localite);
           $utilisateur->setPassword($utilisateurPasswordHasher->hashPassword($utilisateur,$motDePasse));

           $utilisateur->setPrestataire($prestataire);

           $entityManager->persist($prestataire);
           
           $entityManager->persist($img);
           $entityManager->persist($code_postal);
           $entityManager->persist($commune);
           $entityManager->persist($localite);
           $entityManager->persist($utilisateur);

           $entityManager->flush();

           // Après inscription, le nouveau prestataire est redirigé vers sa page

           return $this->redirectToRoute('prestataireP', ['id'=>$utilisateur->getPrestataire()->getId()]);


        }

        return $this->render('registration/inscription_prestataire.html.twig', [
            'form' => $form->createView(),
        ]);
     }


     /**
     * @Route("/prestataires/{id}", name="prestataireP")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */

     public function prestataire($id, Request $request, ManagerRegistry $doctrine): Response
     {
        
       
        $entityManager = $this->getDoctrine()->getManager();

        $prestataire = $doctrine->getRepository(Prestataire::class)->find($id);

        $categoriesPourPrestataire = $prestataire->getCategorieDeServices()->getValues();
        $stages = $prestataire->getStages()->getValues();
        $images = $prestataire->getImage()->getValues();
        
        $tabPrestataires = array();


        
        foreach($categoriesPourPrestataire as $key=>$val){
            
            $tabCategIdem[] = $val->getNom();
        }

        // Objet qui va contenir tous les prestataires de la même catégorie - le prestataire visité y compris
        
        $prestatairesIdem = $doctrine->getRepository(Prestataire::class)->prestatairesAvecIdemCategories($tabCategIdem);
       
        // Suppression cle correspondant à l'objet prestataire qui est visité 

       $key = array_search($prestataire, $prestatairesIdem);

       if($key !== false){
         unset($prestatairesIdem[$key]);
       }

      
        $id_cp = $prestataire->getUtilisateur()->getCodePostal()->getId();
        $id_commune = $prestataire->getUtilisateur()->getCommune()->getId();
        $id_localite = $prestataire->getUtilisateur()->getLocalite()->getId();

        $cp = $doctrine->getRepository(CodePostal::class)->find($id_cp);
        $commune = $doctrine->getRepository(Commune::class)->find($id_commune);
        $localite = $doctrine->getRepository(Localite::class)->find($id_localite);
        
        return $this->render('prestataire/prestataire.html.twig', [
            'prestatairesIdem'=>$prestatairesIdem,
            'categPreta'=>$categoriesPourPrestataire,
            'prestataire' => $prestataire,
            'codep'=>$cp,
            'commune'=>$commune,
            'localite'=>$localite,
            'stages'=>$stages,
            'images'=>$images
        ]);


     }

    /**
     * @Route("/prestataires/{id}/supprimer/{idCateg}", name="categorie_supprimer_ParPrestataire")
     */

     public function suppressionCategorie($idCateg, $id, Request $request, ManagerRegistry $doctrine): Response
     {
        
        $entityManager = $this->getDoctrine()->getManager();

        $categorie_a_supprimer = $entityManager->getRepository(CategorieDeServices::class)->find($idCateg);
        $prestataire = $doctrine->getRepository(Prestataire::class)->find($id);

        $prestataire->removeCategorieDeService($categorie_a_supprimer);

        $entityManager->persist($prestataire);
        $entityManager->flush();

        return $this->redirectToRoute('prestataireP', ['id'=>$prestataire->getId()]);
     }


      /**
     * @Route("/prestataires/{id}/ajouterUnStage", name="ajoutStage")
     */
     
     public function ajoutStage($id, Request $request, ManagerRegistry $doctrine): Response
     {
        
        $entityManager = $this->getDoctrine()->getManager();

        $prestataire = $doctrine->getRepository(Prestataire::class)->find($id);

        $form = $this->createForm(StageType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){

            $data = $form->getData();
            $data->setPrestataire($prestataire);

            $entityManager->persist($data);
            $entityManager->flush();

            // Après avoir ajouté un stage, le prestataire est redirigé vers sa page
           
            return $this->redirectToRoute('prestataireP', ['id'=>$prestataire->getId()]);
        }

        return $this->render('prestataire/ajout_stage.html.twig', [
            'form' => $form->createView(),
        ]);

     }

     /**
     * @Route("/prestataires/{id}/infoStage/{idStage}", name="infoStage")
     */
     
     public function InfosStage($idStage, $id, Request $request, ManagerRegistry $doctrine): Response
     {
        
        $entityManager = $this->getDoctrine()->getManager();

        $detail_stage = $entityManager->getRepository(Stage::class)->find($idStage);
    

        return $this->render('prestataire/detail_stage.html.twig', [
            'detailStage' => $detail_stage,
        ]);

     }

    /**
     * @Route("/prestataires/{id}/supprimerUnStage/{idStage}", name="suppressionStage")
     */
     
     public function supprimerStage($idStage, $id, Request $request, ManagerRegistry $doctrine): Response
     {
        
        $entityManager = $this->getDoctrine()->getManager();

        $stage_a_supprimer = $entityManager->getRepository(Stage::class)->find($idStage);
        $prestataire = $doctrine->getRepository(Prestataire::class)->find($id);
 

        $prestataire->removeStage($stage_a_supprimer);

        $entityManager->persist($prestataire);
        $entityManager->flush();

        return $this->redirectToRoute('prestataireP', ['id'=>$prestataire->getId()]);

     }


}   
