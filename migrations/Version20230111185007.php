<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230111185007 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_de_services ADD image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE categorie_de_services ADD CONSTRAINT FK_D8410DCC3DA5256D FOREIGN KEY (image_id) REFERENCES images (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_D8410DCC3DA5256D ON categorie_de_services (image_id)');
        $this->addSql('ALTER TABLE internaute ADD image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE internaute ADD CONSTRAINT FK_6C8E97CC3DA5256D FOREIGN KEY (image_id) REFERENCES images (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6C8E97CC3DA5256D ON internaute (image_id)');
        $this->addSql('ALTER TABLE prestataire DROP FOREIGN KEY FK_60A264803DA5256D');
        $this->addSql('DROP INDEX UNIQ_60A264803DA5256D ON prestataire');
        $this->addSql('ALTER TABLE prestataire DROP image_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_de_services DROP FOREIGN KEY FK_D8410DCC3DA5256D');
        $this->addSql('DROP INDEX UNIQ_D8410DCC3DA5256D ON categorie_de_services');
        $this->addSql('ALTER TABLE categorie_de_services DROP image_id');
        $this->addSql('ALTER TABLE internaute DROP FOREIGN KEY FK_6C8E97CC3DA5256D');
        $this->addSql('DROP INDEX UNIQ_6C8E97CC3DA5256D ON internaute');
        $this->addSql('ALTER TABLE internaute DROP image_id');
        $this->addSql('ALTER TABLE prestataire ADD image_id INT NOT NULL');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT FK_60A264803DA5256D FOREIGN KEY (image_id) REFERENCES images (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_60A264803DA5256D ON prestataire (image_id)');
    }
}
