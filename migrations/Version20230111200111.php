<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230111200111 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE abus DROP INDEX UNIQ_72C9FD01BA9CD190, ADD INDEX IDX_72C9FD01BA9CD190 (commentaire_id)');
        $this->addSql('ALTER TABLE abus DROP INDEX UNIQ_72C9FD01CAF41882, ADD INDEX IDX_72C9FD01CAF41882 (internaute_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE abus DROP INDEX IDX_72C9FD01CAF41882, ADD UNIQUE INDEX UNIQ_72C9FD01CAF41882 (internaute_id)');
        $this->addSql('ALTER TABLE abus DROP INDEX IDX_72C9FD01BA9CD190, ADD UNIQUE INDEX UNIQ_72C9FD01BA9CD190 (commentaire_id)');
    }
}
