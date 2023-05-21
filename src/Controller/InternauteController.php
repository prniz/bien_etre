<?php

namespace App\Controller;

use App\Entity\Internaute;
use App\Entity\Utilisateur;
use App\Entity\CodePostal;
use App\Entity\Commune;
use App\Entity\Localite;
use App\Form\InternauteType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\UtilisateurRepository;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;



class InternauteController extends AbstractController
{
    
    private $mailer;
    private $verifyEmailHelper;

    public function __construct(MailerInterface $mailer, VerifyEmailHelperInterface $helper){

        $this->mailer = $mailer;
        $this->verifyEmailHelper = $helper;
    }
    
    /**
     * @Route("/internaute", name="app_internaute")
     */
    public function index(): Response
    {
        return $this->render('internaute/index.html.twig', [
            'controller_name' => 'InternauteController',
        ]);
    }

    /**
     * @Route("/pre_inscription_internaute", name="app_preRegister_internaute")
     */

     public function preInscriptionInternaute(Request $request, MailerInterface $mailer): Response 
     {
         $utilisateur = new Utilisateur();
         $utilisateur->setRoles(array('internaute'));
         $internaute = new Internaute();
 
         $form = $this->createFormBuilder()
             ->add('Nom', TextType::class)
             ->add('Prenom', TextType::class)
             ->add('Email', EmailType::class)
             ->add('Envoyer', SubmitType::class)
             ->getForm();
 
 
         $form->handleRequest($request);
 
         if($form->isSubmitted() && $form->isValid()){
 
             $data = $form->getData();
             $mail_internaute = $data["Email"];
             $utilisateur->setEmail($mail_internaute);
 
             $entityManager = $this->getDoctrine()->getManager();
             $entityManager->persist($utilisateur);
             $entityManager->flush();
            
             $signatureComponents = $this->verifyEmailHelper->generateSignature(
 
                 'app_Register_internaute',
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
             
            //  dd($utilisateur);
         }
 
         return $this->render('registration/Preinscription_internaute.html.twig', [
             'form' => $form->createView(),
         ]);
     }

     /**
     * @Route("/inscription_internaute/{id}", name="app_Register_internaute")
     */

     public function registerPrestataire($id, Request $request, UserPasswordHasherInterface $utilisateurPasswordHasher, VerifyEmailHelperInterface $verifyEmailHelper, ManagerRegistry $doctrine): Response 
     {

        $entityManager = $this->getDoctrine()->getManager();

        $internaute = new Internaute();
        $code_postal = new CodePostal();
        $commune = new Commune();
        $localite = new Localite();

        $utilisateur = $doctrine->getRepository(Utilisateur::class)->find($id);

        $form = $this->createForm(InternauteType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){

           $data = $form->getData();

           $nom                 = $data["Nom"];
           $prenom              = $data["Prenom"];

           $rue                 = $data["Rue"];
           $numero              = $data["Numero"];
           $cp                  = $data["codepostal"];
           $comm                = $data["commune"];
           $local               = $data["localite"];
           $motDePasse          = $data["Password"];
       
           $internaute->setNom($nom);
           $internaute->setPrenom($prenom);

          
            $code_postal->setCodePostal($cp);
            $commune->setCommune($comm);
            $localite->setLocalite($local);


           $utilisateur->setDateInscription(new \DateTime());
           $utilisateur->setTypeUtilisateur('internaute');
           $utilisateur->setInscriptConf(true);
           $utilisateur->setAdresseRue($rue);
           $utilisateur->setAdresseNum($numero);
           $utilisateur->setCodePostal($code_postal);
           $utilisateur->setCommune($commune);
           $utilisateur->setLocalite($localite);
           $utilisateur->setPassword($utilisateurPasswordHasher->hashPassword($utilisateur,$motDePasse));

           $utilisateur->setInternaute($internaute);

           $entityManager->persist($internaute);
           $entityManager->persist($code_postal);
           $entityManager->persist($commune);
           $entityManager->persist($localite);
           $entityManager->persist($utilisateur);

           $entityManager->flush();


        }

        return $this->render('registration/inscription_internaute.html.twig', [
            'form' => $form->createView(),
        ]);
     }
}
