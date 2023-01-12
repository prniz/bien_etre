<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221226221034 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE utilisateur ADD adresse_num VARCHAR(255) NOT NULL, ADD adresse_rue VARCHAR(255) NOT NULL, ADD date_inscription DATETIME NOT NULL, ADD type_utilisateur VARCHAR(255) NOT NULL, ADD nb_essais_infructueux INT NOT NULL, ADD banni TINYINT(1) NOT NULL, ADD inscript_conf TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE utilisateur DROP adresse_num, DROP adresse_rue, DROP date_inscription, DROP type_utilisateur, DROP nb_essais_infructueux, DROP banni, DROP inscript_conf');
    }
}
