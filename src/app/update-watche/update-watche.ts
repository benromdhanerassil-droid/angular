import { Component, OnInit } from '@angular/core';
import { Watche } from '../model/watche.model';
import { ActivatedRoute, Router } from '@angular/router';
import { WatcheService } from '../services/watche.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/cateegorie.model';

@Component({
  selector: 'app-update-watche',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-watche.component.html',
  styles: ``
})
export class UpdateWatcheComponent implements OnInit {
  currentWatche = new Watche();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private watcheService: WatcheService
  ) {}

  ngOnInit(): void {    
    this.categories = this.watcheService.listeCategories();
    this.currentWatche = this.watcheService.consulterWatche(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentWatche.categorie.idCat;
  }

  updateWatche() {
    this.currentWatche.categorie = this.watcheService.consulterCategorie(this.updatedCatId);
    this.watcheService.updateWatche(this.currentWatche);
    this.router.navigate(['watches']);
  }
}
