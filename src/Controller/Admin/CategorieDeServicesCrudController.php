<?php

namespace App\Controller\Admin;

use App\Entity\CategorieDeServices;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CategorieDeServicesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CategorieDeServices::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('nom'),
            TextEditorField::new('description'),
            BooleanField::new('enAvant'),
            BooleanField::new('valide'),
        ];
    }
    
}
