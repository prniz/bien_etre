<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class InternauteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Nom', TextType::class)
            ->add('Prenom', TextType::class)
       
            ->add('Rue', TextType::class, [
                'label'=>'Rue',
            ])
            ->add('Numero', TextType::class, [
                'label'=>'Numéro',
            ])
            ->add('codepostal', TextType::class, [

                'label'=>'Code postal',
                'attr'=>['class'=>'cp',]
            ])
            
            ->add('commune', TextType::class, [

                'label'=>'Commune',
                'attr'=>['class'=>'commune',]
            ])

            ->add('localite', TextType::class, [

                'label'=>'Localite',
                'attr'=>['class'=>'localite',]
            ])
            
            ->add('Password', PasswordType::class, [
               
                'label'=>'Mot de passe',
            ])
            ->add('Envoyer', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
