<?php

namespace App\Entity;

use App\Repository\PrestataireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PrestataireRepository::class)
 */
class Prestataire
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
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $siteInternet;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numTel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numTVA;

    /**
     * @ORM\ManyToMany(targetEntity=CategorieDeServices::class, mappedBy="prestataire")
     */
    private $categorieDeServices;

    /**
     * @ORM\OneToMany(targetEntity=Commentaire::class, mappedBy="prestataire")
     */
    private $commentaires;

    /**
     * @ORM\OneToMany(targetEntity=Images::class, mappedBy="prestataire")
     */
    private $image;

     /**
     * @ORM\OneToMany(targetEntity=Promotion::class, mappedBy="prestataire")
     */
    private $promotions;

    /**
     * @ORM\OneToMany(targetEntity=Stage::class, mappedBy="prestataire")
     */
    private $stages;

    /**
     * @ORM\OneToOne(targetEntity=Utilisateur::class, mappedBy="prestataire", cascade={"persist", "remove"})
     */
    private $utilisateur;

    /**
     * @ORM\ManyToMany(targetEntity=Internaute::class, mappedBy="prestataireFavori")
     */
    private $InternauteFavori;

  
    public function __construct()
    {
        $this->categorieDeServices = new ArrayCollection();
        $this->commentaires = new ArrayCollection();
        $this->image = new ArrayCollection();
        $this->promotions = new ArrayCollection();
        $this->stages = new ArrayCollection();
        $this->InternauteFavori = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getSiteInternet(): ?string
    {
        return $this->siteInternet;
    }

    public function setSiteInternet(string $siteInternet): self
    {
        $this->siteInternet = $siteInternet;

        return $this;
    }

    public function getNumTel(): ?string
    {
        return $this->numTel;
    }

    public function setNumTel(string $numTel): self
    {
        $this->numTel = $numTel;

        return $this;
    }

    public function getNumTVA(): ?string
    {
        return $this->numTVA;
    }

    public function setNumTVA(string $numTVA): self
    {
        $this->numTVA = $numTVA;

        return $this;
    }


    /**
     * @return Collection<int, CategorieDeServices>
     */
    public function getCategorieDeServices(): Collection
    {
        return $this->categorieDeServices;
    }

    public function addCategorieDeService(CategorieDeServices $categorieDeService): self
    {
        if (!$this->categorieDeServices->contains($categorieDeService)) {
            $this->categorieDeServices[] = $categorieDeService;
            $categorieDeService->addPrestataire($this);
        }

        return $this;
    }

    public function removeCategorieDeService(CategorieDeServices $categorieDeService): self
    {
        if ($this->categorieDeServices->removeElement($categorieDeService)) {
            $categorieDeService->removePrestataire($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Commentaire>
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaire $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires[] = $commentaire;
            $commentaire->setPrestataire($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): self
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getPrestataire() === $this) {
                $commentaire->setPrestataire(null);
            }
        }
       
    }

    /**
     * @return Collection<int, Images>
     */
    public function getImage(): Collection
    {
        return $this->image;
    }

    public function addImage(Images $image): self
    {
        if (!$this->image->contains($image)) {
            $this->image[] = $image;
            $image->setPrestataire($this);
        }

        return $this;
    }

    public function removeImage(Images $image): self
    {
        if ($this->image->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getPrestataire() === $this) {
                $image->setPrestataire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Promotion>
     */
    public function getPromotions(): Collection
    {
        return $this->promotions;
    }

    public function addPromotion(Promotion $promotion): self
    {
        if (!$this->promotions->contains($promotion)) {
            $this->promotions[] = $promotion;
            $promotion->setPrestataire($this);
        }

        return $this;
    }

    public function removePromotion(Promotion $promotion): self
    {
        if ($this->promotions->removeElement($promotion)) {
            // set the owning side to null (unless already changed)
            if ($promotion->getPrestataire() === $this) {
                $promotion->setPrestataire(null);
            }
        }

        return $this;
    }


     /**
     * @return Collection<int, Stage>
     */
    public function getStages(): Collection
    {
        return $this->stages;
    }

    public function addStage(Stage $stage): self
    {
        if (!$this->stages->contains($stage)) {
            $this->stages[] = $stage;
            $stage->setPrestataire($this);
        }

        return $this;
    }

    public function removeStage(Stage $stage): self
    {
        if ($this->stages->removeElement($stage)) {
            // set the owning side to null (unless already changed)
            if ($stage->getPrestataire() === $this) {
                $stage->setPrestataire(null);
            }
        }

        return $this;
    }

    public function getUtilisateur(): ?Utilisateur
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?Utilisateur $utilisateur): self
    {
        // unset the owning side of the relation if necessary
        if ($utilisateur === null && $this->utilisateur !== null) {
            $this->utilisateur->setPrestataire(null);
        }

        // set the owning side of the relation if necessary
        if ($utilisateur !== null && $utilisateur->getPrestataire() !== $this) {
            $utilisateur->setPrestataire($this);
        }

        $this->utilisateur = $utilisateur;

        return $this;
    }

    /**
     * @return Collection<int, Internaute>
     */
    public function getInternauteFavori(): Collection
    {
        return $this->InternauteFavori;
    }

    public function addInternauteFavori(Internaute $internauteFavori): self
    {
        if (!$this->InternauteFavori->contains($internauteFavori)) {
            $this->InternauteFavori[] = $internauteFavori;
            $internauteFavori->addPrestataireFavori($this);
        }

        return $this;
    }

    public function removeInternauteFavori(Internaute $internauteFavori): self
    {
        if ($this->InternauteFavori->removeElement($internauteFavori)) {
            $internauteFavori->removePrestataireFavori($this);
        }

        return $this;
    }


}
