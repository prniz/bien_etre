<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228202516 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire ADD prestataire_id INT NOT NULL, ADD internaute_id INT NOT NULL');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCBE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id)');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCCAF41882 FOREIGN KEY (internaute_id) REFERENCES internaute (id)');
        $this->addSql('CREATE INDEX IDX_67F068BCBE3DB2B7 ON commentaire (prestataire_id)');
        $this->addSql('CREATE INDEX IDX_67F068BCCAF41882 ON commentaire (internaute_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCBE3DB2B7');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCCAF41882');
        $this->addSql('DROP INDEX IDX_67F068BCBE3DB2B7 ON commentaire');
        $this->addSql('DROP INDEX IDX_67F068BCCAF41882 ON commentaire');
        $this->addSql('ALTER TABLE commentaire DROP prestataire_id, DROP internaute_id');
    }
}
