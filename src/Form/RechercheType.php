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
                'attr'=>['placeholder'=>'prestataire','class'=>'inputPrestataire',]
            
            ])

            ->add('nomCategorie', EntityType::class, [
                'class'=>CategorieDeServices::class,
                
                // 'multiple' => true,
            
            ])

            ->add('codepostal', TextType::class, [
                'attr'=>['placeholder'=>'code postal','class'=>'cp',]
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
