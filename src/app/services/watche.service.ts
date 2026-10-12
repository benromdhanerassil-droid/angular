import { Injectable } from '@angular/core';
import { Watche } from '../model/watche.model';
import { Categorie } from '../model/cateegorie.model';

@Injectable({
  providedIn: 'root'
})
export class WatcheService {
  watches: Watche[];
  watche!: Watche;
  categories!:Categorie[];

  constructor() {
    this.categories = [ {idCat : 1, nomCat : "Sport"},
                        {idCat : 2, nomCat : "Luxe"},
                        {idCat : 3, nomCat : "Classique"}, 
                        {idCat : 4, nomCat : "Connectée"}, 
                        {idCat : 5, nomCat : "Plongée"}];
    this.watches = [
      {
        idWatche: 1,
        marque: 'Rolex',
        prixWatche: 12500.00,
        dateFabrication: new Date('2021-03-15'),
        typeMouvement: 'automatique',
        categorie: {idCat : 1, nomCat : "Sport"}      
      },
      {
        idWatche: 2,
        marque: 'Seiko',
        prixWatche: 350.50,
        dateFabrication: new Date('2019-07-22'),
        typeMouvement: 'quartz',
        categorie: {idCat : 2, nomCat : "Sport"}  
      },
      {
        idWatche: 3,
        marque: 'Omega',
        prixWatche: 5800.00,
        dateFabrication: new Date('2020-11-08'),
        typeMouvement: 'mécanique'  ,    
        categorie: {idCat : 3, nomCat : " Luxe"}        
      }
    ];
  }

  listeWatches(): Watche[] {
    return this.watches;
  }

  ajouterWatche(w: Watche) {
    this.watches.push(w);
  }

  supprimerWatche(w: Watche) {
    const index = this.watches.indexOf(w, 0);
    if (index > -1) {
      this.watches.splice(index, 1);
    }
  }

  consulterWatche(id: number): Watche {
    this.watche = this.watches.find(w => w.idWatche == id)!;
    return this.watche;
  }

  updateWatche(w: Watche) {
    let index = this.watches.indexOf(w, 0);
    if (index === -1) {
      index = this.watches.findIndex(item => item.idWatche == w.idWatche);
    }
    if (index > -1) {
      this.watches.splice(index, 1);
      this.watches.splice(index, 0, w);
    }
  }
  listeCategories():Categorie[] {
return this.categories;
}
consulterCategorie(id:number): Categorie{
return this.categories.find(cat => cat.idCat == id)!;
}
}
