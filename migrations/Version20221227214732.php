<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221227214732 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie_de_services (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, en_avant TINYINT(1) NOT NULL, valide TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_de_services_prestataire (categorie_de_services_id INT NOT NULL, prestataire_id INT NOT NULL, INDEX IDX_7E8281574A81A587 (categorie_de_services_id), INDEX IDX_7E828157BE3DB2B7 (prestataire_id), PRIMARY KEY(categorie_de_services_id, prestataire_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categorie_de_services_prestataire ADD CONSTRAINT FK_7E8281574A81A587 FOREIGN KEY (categorie_de_services_id) REFERENCES categorie_de_services (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE categorie_de_services_prestataire ADD CONSTRAINT FK_7E828157BE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_de_services_prestataire DROP FOREIGN KEY FK_7E8281574A81A587');
        $this->addSql('ALTER TABLE categorie_de_services_prestataire DROP FOREIGN KEY FK_7E828157BE3DB2B7');
        $this->addSql('DROP TABLE categorie_de_services');
        $this->addSql('DROP TABLE categorie_de_services_prestataire');
    }
}
