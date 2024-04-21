import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];
