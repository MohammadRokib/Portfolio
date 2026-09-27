import { Component } from '@angular/core';
import { ABOUT_PARAGRAPHS, ABOUT_HIGHLIGHTS, SERVICES } from '../data';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.html',
})
export class AboutPage {
  paragraphs = ABOUT_PARAGRAPHS;
  highlights = ABOUT_HIGHLIGHTS;
  services = SERVICES;
}
