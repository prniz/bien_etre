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

    public function __construct(MailerInterface $mailer){

        $this->mailer = $mailer;
    }

    /**
     * @Route("/verifier", name="app_verify_email")
     */
    public function verifierUserEmail(): Response
    {
        
        // Au clic sur le lien, envoyer l'utilisateur vers une route pour recuperer le type d'utilisateur
    }


    /**
     * @Route("/inscription", name="app_register")
     */
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, VerifyEmailHelperInterface $verifyEmailHelper, MailerInterface $mailer, EntityManagerInterface $entityManager): Response
    {
        $user = new Utilisateur();

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


            $signatureComponents = $verifyEmailHelper->generateSignature(

                'app_verify_email',
                $user->getEmail(),
                $user->getPassword(),
            );
            
            $email = new TemplatedEmail();
            $email->from('from@example.com');
            $email->to('to@example.com');
            $email->context(['signedUrl' => $signatureComponents->getSignedUrl()]);
            $email->htmlTemplate('registration/mail.html.twig');
           
            $this->mailer->send($email);

    
            // return $this->redirectToRoute('home');
            $this->addFlash('success','mail envoyé avec succès');
        }

        return $this->render('registration/register.html.twig', [
            'form' => $form->createView(),
        ]);
     

    }

    /**
     * @Route("/type_ut", name="type_utilisateur")
     */
    public function recupererTypeUtilisateur(): Response
    {

        return $this->render('registration/typeUtilisateur.html.twig');
    }
}
