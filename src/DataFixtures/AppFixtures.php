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
        
        $faker = Factory::create('fr_BE');

        // création des catégories de services

        for($i=0; $i<2; $i++){

            $categ_services = new CategorieDeServices();
            $categ_services->setNom($faker->word());
            $categ_services->setDescription($faker->paragraph());
            $categ_services->setEnAvant($faker->boolean());
            $categ_services->setValide($faker->boolean());
        
            $manager->persist($categ_services);

            // création des prestataires

            for($j=0; $j<4; $j++){

                $prestataire = new Prestataire();
                $prestataire->setNom($faker->name());
                $prestataire->setSiteInternet($faker->url());
                $prestataire->setNumTel($faker->phoneNumber());
                $prestataire->setNumTVA($faker->vat());
              
                $prestataire->getCategorieDeServices($categ_services);
                $manager->persist($prestataire);

                // création des commentaires

                for($k=0; $k<3; $k++){

                    $commentaire = new Commentaire();
                    $commentaire->setTitre($faker->word());
                    $commentaire->setContenu($faker->paragraph(1));
                    $commentaire->setCote($faker->randomDigit());
                    $commentaire->setDateEncodage($faker->dateTime(new \DateTime('+1 week')));
                    
                    $commentaire->setPrestataire($prestataire);
                    $manager->persist($commentaire);
                }


                // création des promotions

                for($p=0; $p<2; $p++){

                    $promotion = new Promotion();
                    $promotion->setNom($faker->word());
                    $promotion->setDescription($faker->paragraph());
                    $promotion->setDebut($faker->dateTimeBetween('-1 week', '+1 week'));
                    $promotion->setFin($faker->dateTimeBetween('+2 week', '+3 week'));
                    $promotion->setAffichageDe($faker->dateTimeBetween('-1 week', '+1 week'));
                    $promotion->setAffichageJusque($faker->dateTimeBetween('+2 week', '+3 week'));
                    $promotion->setdocumentPDF($faker->numerify());

                    $promotion->setPrestataire($prestataire);
                    $promotion->setCategorieDeService($categ_services);
                    $manager->persist($promotion);
                }

            }
        }
       

        $manager->flush();
    }
}
