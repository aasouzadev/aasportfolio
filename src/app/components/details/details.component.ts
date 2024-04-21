import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [HeaderComponent, FooterComponent],
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  id = Number(this.route.snapshot.paramMap.get('id'));

  projectDetails = [
    {
      id: 0,
      title: 'Coletor Facil',
      image: './assets/coletorfacil.webp',
      description: 'O coletor facil.... lorem ipsum dolor sit amet',
      techs: ['Flutter', 'Dart', 'Firebase'],
      url: 'https://play.google.com/store/apps/details?id=com.aasoftware.coletorfacil',
    },
  ];
}
