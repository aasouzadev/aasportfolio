import { ProjectDetails } from './../interfaces/project-details';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectTranslationService {
  projectDetails: ProjectDetails[] = [
    {
      id: 0,
      title: 'Coletor Fácil',
      image: './assets/coletorfacil.webp',
      description:
        'The Coletor Fácil, the ultimate solution for effective and secure inventory management! Designed to make the process easy, fast, and accessible.',
      features: [
        {
          title: 'Inventory Balancing with AI Barcode Recognition',
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
      urlText: 'PlayStore',
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
          title: 'Unlock the Power of Our Apps',
          expanded: false,
          description:
            'Embark on a journey through our illustrious portfolio of apps, where we showcase top-tier Angular and Ionic solutions. Witness firsthand how our groundbreaking Ionic & Angular apps can propel your business to unprecedented success.',
        },
        {
          title: 'Discover Our Story',
          expanded: false,
          description:
            'Unveil the narrative behind AASoftware – from the visionary minds of our founder to the very essence of our mission. Dive deep into our story and understand the driving force behind our relentless pursuit of excellence.',
        },
        {
          title: 'Let`s Connect and Transform Your Business',
          expanded: false,
          description:
            'Reach out to us and take the first step towards unlocking the full potential of your business. Let`s collaborate and revolutionize the way you operate.',
        },
      ],

      techs: [
        'Angular',
        'Ionic Framework',
        'Firebase Hosting',
        'FireStore',
        'Nest.js',
      ],
      urlText: 'Website',
      url: 'https://aasoftware.web.app/',
    },
    {
      id: 2,
      title: 'Desmembrador',
      image: './assets/desmembradorPost.webp',
      description:
        'In the dynamic world of meat processing, accurate yield calculations are crucial for optimizing profits and ensuring efficient operations. Introducing the Desmembrador App, your one-stop solution for streamlining yield calculations, comparing results across different cuts and suppliers, and generating profit estimates based on margins and weight-based pricing.',
      features: [
        {
          title: 'Yield Calculations',
          expanded: false,
          description: 'Simplify yield calculations for various meat cuts.',
        },
        {
          title: 'Benchmarking and Analysis',
          expanded: false,
          description: 'Compare yield data across cuts and suppliers.',
        },
        {
          title: 'Profit Estimation',
          expanded: false,
          description:
            'Forecast potential earnings based on margin and weight-based pricing.',
        },
      ],
      techs: [
        'Angular',
        'Ionic Framework',
        'Firebase Auth, Firestore, Push Notifications',
        'Still in development',
      ],
      urlText: 'Website',
      url: 'https://aasoftware.web.app/products?app=desmembrador',
    },
    {
      id: 3,
      title:
        'Crafted with Passion: A Portfolio of Clean Design, High Performance, and Angular 17 Excellence',
      image: './assets/portfolio.webp',
      description:
        'Welcome to my portfolio, a testament to my unwavering passion for crafting digital experiences that are both visually captivating and functionally impeccable. As a skilled front-end developer, I meticulously blend clean design principles with cutting-edge technologies to deliver solutions that not only engage users but also drive business results.',
      features: [
        {
          title: 'Achieving PageSpeed Excellence',
          expanded: false,
          description:
            'Crafting high-performance websites is crucial for a successful portfolio. By adhering to best practices such as optimizing code structure, minimizing resource sizes, leveraging caching techniques, and ensuring efficient image loading, you can consistently achieve top PageSpeed Insights scores.',
        },
        {
          title: 'Aesthetics and Functionality in Harmony',
          expanded: false,
          description:
            'I believe that a website`s design should not merely be a superficial layer but an integral part of its functionality. My approach to design is deeply rooted in minimalism, ensuring that every element serves a purpose and contributes to an uncluttered, intuitive user experience. I meticulously craft HTML and CSS code, adhering to the latest web standards and best practices to create visually appealing and responsive interfaces that adapt seamlessly to any device.',
        },
        {
          title: 'A Commitment to Excellence',
          expanded: false,
          description:
            'My dedication to excellence extends beyond technical proficiency. I am committed to following industry best practices, ensuring that my code is well-documented, unit-tested, and optimized for performance. ',
        },
      ],
      techs: ['HTML', 'CSS', 'Angular 17', 'Firebase Hosting'],
      urlText: 'GitHub',
      url: 'https://github.com/aasouzadev/aasportfolio',
    },
  ];
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.translateProjectDetails();
    });
  }

  translateProjectDetails(): ProjectDetails[] {
    let targetLanguage = localStorage.getItem('lang');
    if (!targetLanguage) {
      targetLanguage = 'en';
      if (!this.translate.getLangs().includes(targetLanguage)) {
        console.error(`O idioma ${targetLanguage} não está disponível.`);
      }
      this.translate.use(targetLanguage);
    }
    this.projectDetails.forEach((project) => {
      // Traduz o título do projeto
      this.translate
        .get('PROJECT_DETAILS.' + project.id + '.title')
        .subscribe((translatedTitle) => {
          project.title = translatedTitle;
        });

      // Traduz a descrição do projeto
      this.translate
        .get('PROJECT_DETAILS.' + project.id + '.description')
        .subscribe((translatedDescription) => {
          project.description = translatedDescription;
        });

      // Traduz os recursos do projeto
      project.features.forEach((feature, index) => {
        this.translate
          .get(
            'PROJECT_DETAILS.' + project.id + '.features.' + index + '.title'
          )
          .subscribe((translatedFeatureTitle) => {
            feature.title = translatedFeatureTitle;
          });

        this.translate
          .get(
            'PROJECT_DETAILS.' +
              project.id +
              '.features.' +
              index +
              '.description'
          )
          .subscribe((translatedFeatureDescription) => {
            feature.description = translatedFeatureDescription;
          });
      });
    });

    // Retorna os detalhes do projeto traduzidos
    return this.projectDetails;
  }
}
