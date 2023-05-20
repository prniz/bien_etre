<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\CategorieDeServices;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class PrestataireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Nom', TextType::class)
            ->add('Description', TextareaType::class)
            ->add('Categorie', EntityType::class, [
                'class'=>CategorieDeServices::class,
                'label'=>'Catégorie de services',
                'multiple' => true,
                'attr' => ['class' => 'select-categorie']
            ])
            ->add('Photo', FileType::class, [
                'multiple' => true,
            ])
            ->add('GSM', TelType::class, [
                    'label'=>'Numéro de GSM',
                    'constraints' => [
                        new Assert\Regex([
                            'pattern'=> '\'^(((\+|00)32[ ]?(?:\(0\)[ ]?)?))\'',
                            'message' => 'veuillez remplir un numéro de GSM valide'
                        ]),
                    ]
            ])
            ->add('TVA', TextType::class, [
                'label'=>'Numéro de TVA',

                'constraints' => [
                    new Assert\Regex([
                        'pattern'=> '\'(BE)?0[0-9]{9}\'',
                        'message' => 'veuillez remplir un numéro de TVA valide. EX : BE0123456789'
                    ]),
                ]
                
            ])
            ->add('Site', TextType::class, [
                'label'=>'Lien vers site officiel',
            ])
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
                'attr'=>['class'=>'commune'],
            ])

            ->add('localite', TextType::class, [

                'label'=>'Localite',
                'attr'=>['class'=>'localite'],
               
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
