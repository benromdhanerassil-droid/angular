import { Injectable } from '@angular/core';
import { Watche } from '../model/watche.model';

@Injectable({
  providedIn: 'root'
})
export class WatcheService {
  watches: Watche[];
  watche!: Watche;

  constructor() {
    this.watches = [
      {
        idWatche: 1,
        marque: 'Rolex',
        prixWatche: 12500.00,
        dateFabrication: new Date('2021-03-15'),
        typeMouvement: 'automatique'
      },
      {
        idWatche: 2,
        marque: 'Seiko',
        prixWatche: 350.50,
        dateFabrication: new Date('2019-07-22'),
        typeMouvement: 'quartz'
      },
      {
        idWatche: 3,
        marque: 'Omega',
        prixWatche: 5800.00,
        dateFabrication: new Date('2020-11-08'),
        typeMouvement: 'mécanique'
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
}
