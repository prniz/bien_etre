<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230111184058 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prestataire ADD image_id INT NOT NULL');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT FK_60A264803DA5256D FOREIGN KEY (image_id) REFERENCES images (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_60A264803DA5256D ON prestataire (image_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prestataire DROP FOREIGN KEY FK_60A264803DA5256D');
        $this->addSql('DROP INDEX UNIQ_60A264803DA5256D ON prestataire');
        $this->addSql('ALTER TABLE prestataire DROP image_id');
    }
}
