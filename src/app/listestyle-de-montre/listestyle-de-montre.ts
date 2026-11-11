import { Component, OnInit } from '@angular/core';
import { StyleDeMontre } from '../model/styleDeMontre.model';
import { WatcheService } from '../services/watche.service';
import { UpdatestyleDeMontre } from '../updatestyle-de-montre/updatestyle-de-montre';

@Component({
  imports: [UpdatestyleDeMontre],
  selector: 'app-listestyle-de-montre',
  styles: ``,
  templateUrl: './listestyle-de-montre.html',
})
export class ListestyleDeMontreComponent implements OnInit {
  stylesDeMontre!: StyleDeMontre[];
  ajout:boolean=true;
  updatedStyle: StyleDeMontre = { "idStyle": 0, "nomStyle": "" };

  constructor(private watcheService: WatcheService) { }

  ngOnInit(): void {
    this.chargerStylesDeMontre();
  }

  chargerStylesDeMontre() {
    this.stylesDeMontre = this.watcheService.listeStylesDeMontre();
    console.log(this.stylesDeMontre);
  }
  styleDeMontreUpdated(style: StyleDeMontre) {
    console.log("Style updated event", style);
    if (this.ajout) {
      this.watcheService.ajouterStyleDeMontre(style);
    } else {
      this.watcheService.updateStyleDeMontre(style);
    }
    this.updatedStyle = { idStyle: 0, nomStyle: "" };
    this.ajout = true;
    this.chargerStylesDeMontre();
  }
  updateStyle(style: StyleDeMontre) {
    this.updatedStyle = { ...style };
    this.ajout = false; 
  }
}