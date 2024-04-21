import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly urls = [
    'https://play.google.com/store/apps/details?id=com.aasoftware.coletorfacil',
    'https://aasoftware.web.app/',
    'https://github.com/aasouzadev/desmembrador',
    'https://github.com/aasouzadev/aasportfolio',
  ];

  openUrl(urlid: number) {
    window.open(this.urls[urlid], '_blank');
  }
}
