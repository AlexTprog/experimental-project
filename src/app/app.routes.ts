import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LifeCyclePageComponent } from './pages/life-cycle-page/life-cycle-page.component';
import { ReactiveFormPageComponent } from './pages/reactive-form-page/reactive-form-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'life-cycle',
    component: LifeCyclePageComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
