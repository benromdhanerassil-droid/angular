import { Component, OnInit } from '@angular/core';
import { Watche } from '../model/watche.model';
import { StyleDeMontre } from '../model/styleDeMontre.model';
import { WatcheService } from '../services/watche.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, RouterLink],
  selector: 'app-recherche-par-style-de-montre',
  templateUrl: './recherche-par-style-de-montre.html',
  styles: ``,
})
export class RechercheParStyleDeMontre implements OnInit {
  watches!: Watche[];
  idStyle!: number;
  stylesDeMontre!: StyleDeMontre[];

  constructor(private watcheService: WatcheService) { }

  ngOnInit(): void {
    this.stylesDeMontre = this.watcheService.listeStylesDeMontre();
  }

  onChange() {
    this.watches = this.watcheService.rechercherParStyleDeMontre(this.idStyle);
  }

  supprimerWatche(w: Watche) {
    const conf = confirm('Êtes-vous sûr de vouloir supprimer cette watche ?');
    if (conf) {
      this.watcheService.supprimerWatche(w);
    }
  }
}

