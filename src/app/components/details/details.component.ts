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
        'Angular 17',
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
    {
      id: 1,
      title: 'AASoftware Site',
      image: './assets/aasoftware.webp',
      description:
        'AASoftware empowers businesses with innovative apps, showcasing their expertise and commitment to excellence. Explore their app portfolio and discover how their Ionic & Angular-built solutions can transform your business.',
      features: [
        {
          title: 'App Portfolio',
          expanded: false,
          description:
            'Explore our portfolio of apps, featuring top-tier Angular and Ionic solutions. Discover how our Ionic & Angular apps can elevate your business to new heights.',
        },
        {
          title: 'About',
          expanded: false,
          description:
            'About AASoftware learn about our founder, our vision, and our mission.',
        },
        {
          title: 'Contact',
          expanded: false,
          description: 'Get in touch with us and let us know how we can help.',
        },
      ],
      techs: [
        'Angular',
        'Ionic Framework',
        'Firebase Hosting',
        'FireStore',
        'Nest.js',
      ],
      url: 'https://aasoftware.web.app/',
    },
  ];

  toggleFeature(feature: any) {
    feature.expanded = !feature.expanded;
  }

  openUrl(urlid: number) {
    window.open(this.projectDetails[this.id].url, '_blank');
  }
}
