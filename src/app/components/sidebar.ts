import { Component } from '@angular/core';
import { PROFILE, SOCIALS } from '../data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  profile = PROFILE;
  socials = SOCIALS;
}
