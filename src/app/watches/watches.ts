import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Watche } from '../model/watche.model';
import { WatcheService } from '../services/watche.service';

@Component({
  selector: 'app-watches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './watches.component.html',
  styleUrl: './watches.css',
})
export class WatchesComponent implements OnInit {
  watches: Watche[];

  constructor(private watcheService: WatcheService) {
    this.watches = watcheService.listeWatches();
  }

  ngOnInit(): void {}

  supprimerWatche(w: Watche) {
    const conf = confirm('Êtes-vous sûr de vouloir supprimer cette watche ?');
    if (conf) {
      this.watcheService.supprimerWatche(w);
    }
  }
}
