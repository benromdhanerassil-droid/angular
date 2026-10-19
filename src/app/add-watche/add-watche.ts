import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Watche } from '../model/watche.model';
import { WatcheService } from '../services/watche.service';
import { StyleDeMontre } from '../model/styleDeMontre.model';

@Component({
  selector: 'app-add-watche',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-watche.component.html',
  styleUrl: './add-watche.css',
})
export class AddWatcheComponent implements OnInit {
  newWatche = new Watche();
  stylesDeMontre! : StyleDeMontre[];
  newIdStyle! : number;
  newStyleDeMontre! : StyleDeMontre;

  constructor(
    private watcheService: WatcheService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stylesDeMontre = this.watcheService.listeStylesDeMontre();
  }

  ajouterWatche() {
    this.newStyleDeMontre = this.watcheService.consulterStyleDeMontre(this.newIdStyle);
    this.newWatche.styleDeMontre = this.newStyleDeMontre;
    this.watcheService.ajouterWatche(this.newWatche);
    this.router.navigate(['watches']);
  }
}
