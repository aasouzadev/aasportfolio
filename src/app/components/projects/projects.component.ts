import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
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

  private roter = inject(Router);

  openUrl(urlid: number) {
    window.open(this.urls[urlid], '_blank');
  }

  openDetails(param: number) {
    this.roter.navigate(['/details', param]);
  }
}
