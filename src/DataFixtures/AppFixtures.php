<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory;
use App\Entity\Prestataire;
use App\Entity\CategorieDeServices;
use App\Entity\Commentaire;
use App\Entity\Promotion;
use App\Entity\Stage;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\DateTime;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        
        
    }
}
