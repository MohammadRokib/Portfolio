import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
];
