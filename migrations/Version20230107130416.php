<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230107130416 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bloc DROP INDEX UNIQ_C778955ACAF41882, ADD INDEX IDX_C778955ACAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX UNIQ_C11D7DD1BE3DB2B7, ADD INDEX IDX_C11D7DD1BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX UNIQ_C11D7DD19790E46A, ADD INDEX IDX_C11D7DD19790E46A (categorie_de_service_id)');
        $this->addSql('ALTER TABLE stage DROP INDEX UNIQ_C27C9369BE3DB2B7, ADD INDEX IDX_C27C9369BE3DB2B7 (prestataire_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bloc DROP INDEX IDX_C778955ACAF41882, ADD UNIQUE INDEX UNIQ_C778955ACAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX IDX_C11D7DD1BE3DB2B7, ADD UNIQUE INDEX UNIQ_C11D7DD1BE3DB2B7 (prestataire_id)');
        $this->addSql('ALTER TABLE promotion DROP INDEX IDX_C11D7DD19790E46A, ADD UNIQUE INDEX UNIQ_C11D7DD19790E46A (categorie_de_service_id)');
        $this->addSql('ALTER TABLE stage DROP INDEX IDX_C27C9369BE3DB2B7, ADD UNIQUE INDEX UNIQ_C27C9369BE3DB2B7 (prestataire_id)');
    }
}
