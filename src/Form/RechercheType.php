<?php

namespace App\Form;

use App\Entity\Recherche;
use App\Entity\CategorieDeServices;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RechercheType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nomPrestataire', TextType::class, [
                'attr'=>['placeholder'=>'prestataire','class'=>'inputPrestataire'],
                'required'=> false,
            ])

            ->add('TitreCategorie', EntityType::class, [
                'placeholder' => 'Votre choix',
                'class'=>CategorieDeServices::class,
                'required'=> false,
                'multiple' => true,
                'choice_label' => 'nom',
                'attr' => ['class' => 'select-categorie']
            
            ])

            ->add('codepostal', TextType::class, [
                'attr'=>['placeholder'=>'code postal','class'=>'cp'],
                'required'=> false,
                
            ])

            ->add('commune', TextType::class, [
                'attr'=>['placeholder'=>'commune','class'=>'commune'],
                'required'=> false,
            
            ])

            ->add('localite', TextType::class, [
                'attr'=>['placeholder'=>'localité','class'=>'localite'],
                'required'=> false,
             
            ])
             ->add('Chercher', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Recherche::class,
            'multiple' => true,
        ]);
    }
}
