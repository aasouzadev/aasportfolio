import { ProjectDetails } from './../../interfaces/project-details';
import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProjectTranslationService } from '../../services/project-translation.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [HeaderComponent, FooterComponent, RouterLink],
})
export class DetailsComponent implements OnInit {
  projectDetails: ProjectDetails[] = [];
  async ngOnInit(): Promise<void> {
    this.projectDetails =
      await this.projectTranslationService.translateProjectDetails();
    console.log(this.projectDetails);
  }
  private route = inject(ActivatedRoute);
  private projectTranslationService = inject(ProjectTranslationService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  showFeatures = false;

  toggleFeature(feature: any) {
    feature.expanded = !feature.expanded;
  }

  openUrl(urlid: number) {
    window.open(this.projectDetails[this.id].url, '_blank');
  }
}
