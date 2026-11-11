import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { StyleDeMontre } from '../model/styleDeMontre.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-updatestyle-de-montre',
  styles: ``,
  templateUrl: './updatestyle-de-montre.html',
})
export class UpdatestyleDeMontre implements OnInit {
  @Input()
  styleDeMontre!: StyleDeMontre;
  @Input()
  ajout!: boolean;


  @Output()
  styleDeMontreUpdated = new EventEmitter<StyleDeMontre>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateStyleDeMontre ", this.styleDeMontre);
  }

  saveStyleDeMontre() {
    this.styleDeMontreUpdated.emit(this.styleDeMontre);
  }
}

