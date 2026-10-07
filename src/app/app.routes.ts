import { Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches';
import { AddWatcheComponent } from './add-watche/add-watche';
import { UpdateWatcheComponent } from './update-watche/update-watche';

export const routes: Routes = [
  { path: 'watches', component: WatchesComponent },
  { path: 'add-watche', component: AddWatcheComponent },
  { path: '', redirectTo: 'watches', pathMatch: 'full' },
  { path: 'updateWatche/:id', component: UpdateWatcheComponent }
];
