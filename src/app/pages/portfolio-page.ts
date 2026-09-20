import { Component } from '@angular/core';
import { PROJECTS } from '../data';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {
  projects = PROJECTS;
}
