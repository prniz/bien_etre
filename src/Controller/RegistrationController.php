<?php

namespace App\Controller;

use App\Entity\Utilisateur;
use App\Entity\Prestataire;
use App\Entity\Internaute;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Doctrine\Persistence\ManagerRegistry;

class RegistrationController extends AbstractController
{
    
    private $mailer;
    private $verifyEmailHelper;

    public function __construct(MailerInterface $mailer, VerifyEmailHelperInterface $helper){

        $this->mailer = $mailer;
        $this->verifyEmailHelper = $helper;
    }

    /**
     * @Route("/verifier", name="app_verify_email")
     */
    public function verifierUserEmail(Request $request, VerifyEmailHelperInterface $verifyEmailHelper, ManagerRegistry $doctrine): Response
    {
       
        return $this->render('registration/typeUtilisateur.html.twig');
       
    }


    /**
     * @Route("/pre_inscription", name="app_preRegister")
     */
    public function preRegister(Request $request, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        $user = new Utilisateur();
        $user->isInscriptConf();
    
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
            $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );



            // $entityManager->persist($user);
            // $entityManager->flush();
            // do anything else you need here, like send an email


            $signatureComponents = $this->verifyEmailHelper->generateSignature(

                'app_verify_email',
                $user->getEmail(),
                $user->getPassword(),

            );

       
            
            
            $email = new TemplatedEmail();
            $email->from('from@example.com');
            $email->to($user->getEmail());
            $email->context(['signedUrl' => $signatureComponents->getSignedUrl()]);
            $email->htmlTemplate('registration/mail.html.twig');
           
            $this->mailer->send($email);
            
            $this->addFlash('success','mail envoyé avec succès');
        }

        return $this->render('registration/register.html.twig', [
            'form' => $form->createView(),
        ]);
     

    }

    
    /**
     * @Route("/verifier/{role}", name="app_verifier_role")
     */

     public function register($role, Request $request, UserPasswordHasherInterface $userPasswordHasher): Response
     {
        if($role === 'prestataire'){

            return $this->redirectToRoute('app_preRegister_prestataire');

        }else if($role == 'internaute'){
            return $this->redirectToRoute('app_preRegister_internaute');
        }
     }



    
}
