import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { LifeCyclePageModule } from './pages/life-cycle-page/life-cycle-page.module';
import { ReactiveFormPageModule } from './pages/reactive-form-page/reactive-form-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HomePageModule,
    LifeCyclePageModule,
    ReactiveFormPageModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'experimental-project';
  pages: { path: string; name: string }[] = [
    {
      path: 'home',
      name: 'Inicio',
    },
    {
      path: 'life-cycle',
      name: 'Pruebas ciclo de vida',
    },
    {
      path: 'reactive-form',
      name: 'Formulario reactivo',
    },
  ];
}
