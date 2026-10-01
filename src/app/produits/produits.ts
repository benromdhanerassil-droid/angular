import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.css',
})
export class ProduitsComponent implements OnInit {
  produits: Produit[]; // un tableau de Produit

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {}

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.produitService.supprimerProduit(p);
    }
  }
}

export { ProduitsComponent as Produits };
