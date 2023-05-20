<?php

namespace App\Form;

use App\Entity\Stage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints as Assert;


class StageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('description', TextareaType::class)
            ->add('infoComplementaire', TextareaType::class)
            ->add('debut' , DateType::class, [
                'widget' => 'single_text',
            
                ])
            ->add('fin', DateType::class, [
                'widget' => 'single_text',
                'constraints' => [
                    new Assert\GreaterThan([
                        'propertyPath'=>'parent.all[debut].data',
                        'message' => 'attention, la date de fin doit être ultérieure à celle de début'
                    ]),
                ]
                ])
            ->add('affichageDe', DateType::class, [
                'widget' => 'single_text',

                'constraints' => [
                    new Assert\LessThan([
                        'propertyPath'=>'parent.all[debut].data',
                        'message' => 'attention, la date de début de publication doit être antérieur à celle de fin'
                    ]),
                ]
                
                ])
            ->add('affichageJusque', DateType::class, [
                'widget' => 'single_text',
                
                'constraints' => [
                    new Assert\GreaterThan([
                        'propertyPath'=>'parent.all[affichageDe].data',
                        'message' => 'attention, la date de fin de publication doit être ultérieure à celle de début'
                    ]),
                ]

                ])
            ->add('tarif')
           
            ->add('Ajouter', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Stage::class,
        ]);
    }
}
