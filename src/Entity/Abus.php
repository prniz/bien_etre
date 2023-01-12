<?php

namespace App\Entity;

use App\Repository\AbusRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AbusRepository::class)
 */
class Abus
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateEncodageAbus;


    /**
     * @ORM\ManyToOne(targetEntity=Internaute::class, inversedBy="abus")
     * @ORM\JoinColumn(nullable=false)
     */
    private $internaute;

    /**
     * @ORM\ManyToOne(targetEntity=Commentaire::class, inversedBy="abus")
     * @ORM\JoinColumn(nullable=false)
     */
    private $commentaire;

 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateEncodageAbus(): ?\DateTimeInterface
    {
        return $this->dateEncodageAbus;
    }

    public function setDateEncodageAbus(\DateTimeInterface $dateEncodageAbus): self
    {
        $this->dateEncodageAbus = $dateEncodageAbus;

        return $this;
    }

    public function getCommentaire(): ?Commentaire
    {
        return $this->commentaire;
    }

    public function setCommentaire(?Commentaire $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getInternaute(): ?Internaute
    {
        return $this->internaute;
    }

    public function setInternaute(?Internaute $internaute): self
    {
        $this->internaute = $internaute;

        return $this;
    }

}
