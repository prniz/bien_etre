<?php

namespace App\Entity;

use App\Repository\RechercheRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RechercheRepository::class)
 */
class Recherche
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomPrestataire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomCategorie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPrestataire(): ?string
    {
        return $this->nomPrestataire;
    }

    public function setNomPrestataire(?string $nomPrestataire): self
    {
        $this->nomPrestataire = $nomPrestataire;

        return $this;
    }

    public function getNomCategorie(): ?string
    {
        return $this->nomCategorie;
    }

    public function setNomCategorie(?string $nomCategorie): self
    {
        $this->nomCategorie = $nomCategorie;

        return $this;
    }
}
