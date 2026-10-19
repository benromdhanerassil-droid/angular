import { Injectable } from '@angular/core';
import { Watche } from '../model/watche.model';
import { StyleDeMontre } from '../model/styleDeMontre.model';

@Injectable({
  providedIn: 'root'
})
export class WatcheService {
  watches: Watche[];
  watche!: Watche;
  stylesDeMontre!: StyleDeMontre[];

  constructor() {
    this.stylesDeMontre = [
    { idStyle: 1, nomStyle: "Sport" },
    { idStyle: 2, nomStyle: "Luxe" },
    { idStyle: 3, nomStyle: "Classique" },
    { idStyle: 4, nomStyle: "Connectée" }
    ];
    this.watches = [
      {
        idWatche: 1,
        marque: 'Rolex',
        prixWatche: 12500.00,
        dateFabrication: new Date('2021-03-15'),
        typeMouvement: 'automatique',
        styleDeMontre: { idStyle: 1, nomStyle: "Sport" }
      },
      {
        idWatche: 4,
        marque: 'calvin klein',
        prixWatche: 2500.00,
        dateFabrication: new Date('2022-04-10'),
        typeMouvement: 'quartz',
        styleDeMontre: { idStyle: 2, nomStyle: "Luxe" }
      },
      {
        idWatche: 2,
        marque: 'Seiko',
        prixWatche: 350.50,
        dateFabrication: new Date('2019-07-22'),
        typeMouvement: 'quartz',
        styleDeMontre: { idStyle: 2, nomStyle: "Sport" }
      },
      {
        idWatche: 3,
        marque: 'Omega',
        prixWatche: 5800.00,
        dateFabrication: new Date('2020-11-08'),
        typeMouvement: 'mécanique',
        styleDeMontre: { idStyle: 3, nomStyle: "Luxe" }
      },
      {
        idWatche: 5,
        marque: 'Tissot',
        prixWatche: 700.00,
        dateFabrication: new Date('2022-05-15'),
        typeMouvement: 'mécanique',
        styleDeMontre: { idStyle: 2, nomStyle: "Luxe" }
      },
      {
        idWatche: 6,
        marque: 'Seiko',
        prixWatche: 750.00,
        dateFabrication: new Date('2022-05-15'),
        typeMouvement: 'mécanique',
        styleDeMontre: { idStyle: 2, nomStyle: "Luxe" }
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
  listeStylesDeMontre(): StyleDeMontre[] {
    return this.stylesDeMontre;
  }
  consulterStyleDeMontre(id: number): StyleDeMontre {
    return this.stylesDeMontre.find(style => style.idStyle == id)!;
  }
  rechercherParStyleDeMontre(idStyle: number): Watche[] {
    return this.watches.filter(w => w.styleDeMontre?.idStyle == idStyle);
  }
  rechercherParNom(nom: string): Watche[] {
    return this.watches.filter(w =>
      w.marque.toLowerCase().includes(nom.toLowerCase())
    );
  }


}
