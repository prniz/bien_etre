<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230107124812 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire DROP INDEX UNIQ_67F068BCCAF41882, ADD INDEX IDX_67F068BCCAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX UNIQ_67F068BCBE3DB2B7, ADD INDEX IDX_67F068BCBE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3131A4F72, ADD INDEX IDX_1D1C63B3131A4F72 (commune_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3924DD2B5, ADD INDEX IDX_1D1C63B3924DD2B5 (localite_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3B2B59251, ADD INDEX IDX_1D1C63B3B2B59251 (code_postal_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire DROP INDEX IDX_67F068BCCAF41882, ADD UNIQUE INDEX UNIQ_67F068BCCAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX IDX_67F068BCBE3DB2B7, ADD UNIQUE INDEX UNIQ_67F068BCBE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3B2B59251, ADD UNIQUE INDEX UNIQ_1D1C63B3B2B59251 (code_postal_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3131A4F72, ADD UNIQUE INDEX UNIQ_1D1C63B3131A4F72 (commune_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3924DD2B5, ADD UNIQUE INDEX UNIQ_1D1C63B3924DD2B5 (localite_id)');
    }
}
