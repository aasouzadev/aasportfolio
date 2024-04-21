import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [HeaderComponent, FooterComponent, RouterLink],
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  id = Number(this.route.snapshot.paramMap.get('id'));
  showFeatures = false;

  projectDetails = [
    {
      id: 0,
      title: 'Coletor Fácil',
      image: './assets/coletorfacil.webp',
      description:
        'The Coletor Fácil, the ultimate solution for effective and secure inventory management! Designed to make the process easy, fast, and accessible.',
      features: [
        {
          title: 'Inventory Balancing with Smart Barcode Recognition:',
          expanded: false,
          description:
            'Our solution allows users to effortlessly create inventory balances by leveraging intelligent barcode recognition technology. This feature ensures swift and accurate inventory counts, empowering businesses to maintain optimal stock levels.',
        },
        {
          title: ' Blind Receipt Verification:',
          expanded: false,
          description:
            ' With our blind receipt verification feature, users can import invoices and seamlessly compare them with received goods data. This process enhances accuracy and reliability, providing businesses with greater confidence in their receiving processes.',
        },
        {
          title: ' Community Product Database:',
          expanded: false,
          description:
            ' Our extensive community product database offers access to over 50,000 product entries. Users can easily search and retrieve detailed information about various products, facilitating informed decision-making and efficient inventory management.',
        },
      ],
      techs: [
        'Angular',
        'Ionic Framework',
        'Capacitor',
        'Firebase Auth, Firestore, Push Notifications',
        'Nest.js',
        'Oracle Cloud Infrastructure (OCI)',
        'Docker',
        'Efi API PIX',
      ],
      url: 'https://play.google.com/store/apps/details?id=com.aasoftware.coletorfacil',
    },
  ];

  toggleFeature(feature: any) {
    feature.expanded = !feature.expanded;
  }

  openUrl(urlid: number) {
    window.open(this.projectDetails[this.id].url, '_blank');
  }
}
