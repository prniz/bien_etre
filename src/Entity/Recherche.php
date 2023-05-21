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


    private $codepostal;
    private $commune;
    private $localite;

    /**
     * @ORM\Column(type="array")
     */
    private $TitreCategorie = [];

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

    public function getCodePostal(): ?string
    {
        return $this->codepostal;
    }

    public function setCodePostal(?string $codepostal): self
    {
        $this->codepostal = $codepostal;

        return $this;
    }

    public function getCommune(): ?string
    {
        return $this->commune;
    }

    public function setCommune(?string $commune): self
    {
        $this->commune = $commune;

        return $this;
    }

    public function getLocalite(): ?string
    {
        return $this->localite;
    }

    public function setLocalite(?string $localite): self
    {
        $this->localite = $localite;

        return $this;
    }

    public function getTitreCategorie(): ?array
    {
        return $this->TitreCategorie;
    }

    public function setTitreCategorie(array $TitreCategorie): self
    {
        $this->TitreCategorie = $TitreCategorie;

        return $this;
    }

}
