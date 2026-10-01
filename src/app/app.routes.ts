import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduit } from './update-produit/update-produit';

export const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "add-produit", component: AddProduitComponent },
  { path: "", redirectTo: "produits", pathMatch: "full" },
  { path: "updateProduit/:id", component: UpdateProduit }
];
