import { Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches';
import { AddWatcheComponent } from './add-watche/add-watche';
import { UpdateWatcheComponent } from './update-watche/update-watche';
import { RechercheParStyleDeMontre } from './recherche-par-style-de-montre/recherche-par-style-de-montre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
  { path: 'watches', component: WatchesComponent },
  { path: 'add-watche', component: AddWatcheComponent },
  { path: 'updateWatche/:id', component: UpdateWatcheComponent },
  { path: 'rechercheParStyleDeMontre', component: RechercheParStyleDeMontre },
  { path: 'rechercheParNom', component: RechercheParNom },
  { path: '', redirectTo: 'watches', pathMatch: 'full' },
];
