<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230111182740 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6ACAF41882');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A9790E46A');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6ABE3DB2B7');
        $this->addSql('DROP INDEX UNIQ_E01FBE6ACAF41882 ON images');
        $this->addSql('DROP INDEX UNIQ_E01FBE6A9790E46A ON images');
        $this->addSql('DROP INDEX UNIQ_E01FBE6ABE3DB2B7 ON images');
        $this->addSql('ALTER TABLE images DROP prestataire_id, DROP internaute_id, DROP categorie_de_service_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE images ADD prestataire_id INT DEFAULT NULL, ADD internaute_id INT DEFAULT NULL, ADD categorie_de_service_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6ACAF41882 FOREIGN KEY (internaute_id) REFERENCES internaute (id)');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A9790E46A FOREIGN KEY (categorie_de_service_id) REFERENCES categorie_de_services (id)');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6ABE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E01FBE6ACAF41882 ON images (internaute_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E01FBE6A9790E46A ON images (categorie_de_service_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E01FBE6ABE3DB2B7 ON images (prestataire_id)');
    }
}
