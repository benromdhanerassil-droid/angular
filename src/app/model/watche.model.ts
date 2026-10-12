import { Categorie } from "./cateegorie.model";

export class Watche {
  idWatche!: number;
  marque!: string;
  prixWatche!: number;
  dateFabrication!: Date;
  typeMouvement!: string;
  categorie!: Categorie;  
}
