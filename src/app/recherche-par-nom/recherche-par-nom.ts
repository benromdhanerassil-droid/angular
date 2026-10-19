import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Watche } from '../model/watche.model';
import { WatcheService } from '../services/watche.service';
import { SearchfiltrePipe } from '../searchfiltre-pipe';
import { RouterLink } from '@angular/router';
@Component({
  imports: [FormsModule, CommonModule ,SearchfiltrePipe,RouterLink],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit {
  marque!: string;
  watches!: Watche[];
  watche!: Watche;
  allWatches! : Watche[];
  searchTerm!: string;

  constructor(private watcheService: WatcheService) { }

  ngOnInit(): void {
    this.allWatches = this.watcheService.listeWatches();
    this.watches = this.allWatches;
  }
  onKeyUp(filterText: string) {
    this.watches = this.allWatches.filter(item =>
      item.marque.toLowerCase().includes(filterText));
  }
  supprimerWatche(w: Watche) {
    const conf = confirm('Êtes-vous sûr de vouloir supprimer cette watche ?');
    if (conf) {
      this.watcheService.supprimerWatche(w);
    }
  }
}
