<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230107115757 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE abus DROP INDEX IDX_72C9FD01CAF41882, ADD UNIQUE INDEX UNIQ_72C9FD01CAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE abus DROP INDEX IDX_72C9FD01BA9CD190, ADD UNIQUE INDEX UNIQ_72C9FD01BA9CD190 (commentaire_id)');
        $this->addSql('ALTER TABLE bloc DROP INDEX IDX_C778955ACAF41882, ADD UNIQUE INDEX UNIQ_C778955ACAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX IDX_67F068BCCAF41882, ADD UNIQUE INDEX UNIQ_67F068BCCAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX IDX_67F068BCBE3DB2B7, ADD UNIQUE INDEX UNIQ_67F068BCBE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE images CHANGE prestataire_id prestataire_id INT DEFAULT NULL, CHANGE internaute_id internaute_id INT DEFAULT NULL, CHANGE categorie_de_service_id categorie_de_service_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE promotion DROP INDEX IDX_C11D7DD1BE3DB2B7, ADD UNIQUE INDEX UNIQ_C11D7DD1BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX IDX_C11D7DD19790E46A, ADD UNIQUE INDEX UNIQ_C11D7DD19790E46A (categorie_de_service_id)');
        $this->addSql('ALTER TABLE stage DROP INDEX IDX_C27C9369BE3DB2B7, ADD UNIQUE INDEX UNIQ_C27C9369BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3131A4F72, ADD UNIQUE INDEX UNIQ_1D1C63B3131A4F72 (commune_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3924DD2B5, ADD UNIQUE INDEX UNIQ_1D1C63B3924DD2B5 (localite_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX IDX_1D1C63B3B2B59251, ADD UNIQUE INDEX UNIQ_1D1C63B3B2B59251 (code_postal_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE abus DROP INDEX UNIQ_72C9FD01BA9CD190, ADD INDEX IDX_72C9FD01BA9CD190 (commentaire_id)');
        $this->addSql('ALTER TABLE abus DROP INDEX UNIQ_72C9FD01CAF41882, ADD INDEX IDX_72C9FD01CAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE bloc DROP INDEX UNIQ_C778955ACAF41882, ADD INDEX IDX_C778955ACAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX UNIQ_67F068BCCAF41882, ADD INDEX IDX_67F068BCCAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE commentaire DROP INDEX UNIQ_67F068BCBE3DB2B7, ADD INDEX IDX_67F068BCBE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE images CHANGE prestataire_id prestataire_id INT NOT NULL, CHANGE internaute_id internaute_id INT NOT NULL, CHANGE categorie_de_service_id categorie_de_service_id INT NOT NULL');
        $this->addSql('ALTER TABLE promotion DROP INDEX UNIQ_C11D7DD1BE3DB2B7, ADD INDEX IDX_C11D7DD1BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX UNIQ_C11D7DD19790E46A, ADD INDEX IDX_C11D7DD19790E46A (categorie_de_service_id)');
        $this->addSql('ALTER TABLE stage DROP INDEX UNIQ_C27C9369BE3DB2B7, ADD INDEX IDX_C27C9369BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3B2B59251, ADD INDEX IDX_1D1C63B3B2B59251 (code_postal_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3131A4F72, ADD INDEX IDX_1D1C63B3131A4F72 (commune_id)');
        $this->addSql('ALTER TABLE utilisateur DROP INDEX UNIQ_1D1C63B3924DD2B5, ADD INDEX IDX_1D1C63B3924DD2B5 (localite_id)');
    }
}
