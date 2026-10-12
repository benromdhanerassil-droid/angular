import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Watche } from '../model/watche.model';
import { WatcheService } from '../services/watche.service';
import { Categorie } from '../model/cateegorie.model';

@Component({
  selector: 'app-add-watche',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-watche.component.html',
  styleUrl: './add-watche.css',
})
export class AddWatcheComponent implements OnInit {
  newWatche = new Watche();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;

  constructor(
    private watcheService: WatcheService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.watcheService.listeCategories();
  }

  ajouterWatche() {
    this.newCategorie = this.watcheService.consulterCategorie(this.newIdCat);
    this.newWatche.categorie = this.newCategorie;
    this.watcheService.ajouterWatche(this.newWatche);
    this.router.navigate(['watches']);
  }
}
