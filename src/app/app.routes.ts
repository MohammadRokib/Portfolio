import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page';
import { PortfolioPage } from './pages/portfolio-page';
import { ResumePage } from './pages/resume-page';
import { ContactPage } from './pages/contact-page';

export const routes: Routes = [
  { path: '', component: AboutPage },
  { path: 'portfolio', component: PortfolioPage },
  { path: 'resume', component: ResumePage },
  { path: 'contact', component: ContactPage },
];
