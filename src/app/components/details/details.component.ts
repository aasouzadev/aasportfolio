import { ProjectDetails } from './../../interfaces/project-details';
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
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    this.changeLanguage();
  }

  changeLanguage() {
    const lang = localStorage.getItem('lang');
    if (lang === 'pt') {
      this.projectDetails = this.projectDetailsPt;
    } else if (lang === 'es') {
      this.projectDetails = this.projectDetailsEs;
    } else {
      this.projectDetails = this.projectDetailsEn;
    }
  }
  switchLanguage() {
    this.changeLanguage();
  }

  private route = inject(ActivatedRoute);
  id = Number(this.route.snapshot.paramMap.get('id'));
  showFeatures = false;
  projectDetails: ProjectDetails[] = [];
  projectDetailsEn: ProjectDetails[] = [
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
      id: 3,
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
      id: 4,
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

  projectDetailsPt: ProjectDetails[] = [
    {
      id: 0,
      title: 'Coletor Fácil',
      description:
        'O Coletor Fácil, a solução definitiva para uma gestão de inventário eficaz e segura! Projetado para tornar o processo fácil, rápido e acessível.',
      image: './assets/coletorfacil.webp',
      features: [
        {
          expanded: false,
          title:
            'Equilíbrio de Inventário com Reconhecimento de Código de Barras por IA',
          description:
            'Nossa solução permite que os usuários criem balanços de inventário sem esforço, aproveitando a tecnologia inteligente de reconhecimento de código de barras. Essa funcionalidade garante contagens de inventário rápidas e precisas, capacitando as empresas a manter níveis de estoque ideais.',
        },
        {
          expanded: false,
          title: 'Verificação de Recebimento às Cegas',
          description:
            'Com nossa função de verificação de recebimento às cegas, os usuários podem importar faturas e compará-las perfeitamente com os dados dos produtos recebidos. Esse processo aumenta a precisão e a confiabilidade, fornecendo às empresas uma maior confiança em seus processos de recebimento.',
        },
        {
          expanded: false,
          title: 'Base de Dados de Produtos da Comunidade',
          description:
            'Nosso extenso banco de dados de produtos da comunidade oferece acesso a mais de 50.000 entradas de produtos. Os usuários podem facilmente pesquisar e recuperar informações detalhadas sobre vários produtos, facilitando a tomada de decisões informadas e a gestão eficiente de inventário.',
        },
      ],
      techs: [
        'Angular 17',
        'Framework Ionic',
        'Capacitor',
        'Autenticação Firebase, Firestore, Notificações Push',
        'Nest.js',
        'Infraestrutura de Nuvem Oracle (OCI)',
        'Docker',
        'API PIX da Efi',
      ],
      urlText: 'PlayStore',
      url: 'https://play.google.com/store/apps/details?id=com.aasoftware.coletorfacil',
    },
    {
      id: 1,
      title: 'Site da AASoftware',
      description:
        'A AASoftware capacita as empresas com aplicativos inovadores, demonstrando sua expertise e compromisso com a excelência. Explore seu portfólio de aplicativos e descubra como suas soluções construídas com Ionic & Angular podem transformar seu negócio.',
      image: './assets/aasoftware.webp',
      features: [
        {
          expanded: false,
          title: 'Desbloqueie o Poder de Nossos Aplicativos',
          description:
            'Embarque em uma jornada através do nosso ilustre portfólio de aplicativos, onde apresentamos soluções de ponta Angular e Ionic. Veja em primeira mão como nossos revolucionários aplicativos Ionic & Angular podem impulsionar seu negócio para o sucesso sem precedentes.',
        },
        {
          expanded: false,
          title: 'Descubra Nossa História',
          description:
            'Revele a narrativa por trás da AASoftware - das mentes visionárias de nosso fundador à essência de nossa missão. Aprofunde-se em nossa história e compreenda a força motriz por trás de nossa busca incessante pela excelência.',
        },
        {
          expanded: false,
          title: 'Conecte-se e Transforme seu Negócio',
          description:
            'Entre em contato conosco e dê o primeiro passo para desbloquear todo o potencial de seu negócio. Vamos colaborar e revolucionar a maneira como você opera.',
        },
      ],
      techs: [
        'Angular',
        'Framework Ionic',
        'Hospedagem Firebase',
        'FireStore',
        'Nest.js',
      ],
      urlText: 'Website',
      url: 'https://aasoftware.web.app/',
    },
    {
      id: 3,
      title: 'Desmembrador',
      description:
        'No mundo dinâmico do processamento de carne, cálculos precisos de rendimento são cruciais para otimizar lucros e garantir operações eficientes. Apresentando o aplicativo Desmembrador, sua solução completa para simplificar cálculos de rendimento, comparar resultados entre cortes e fornecedores diferentes e gerar estimativas de lucro com base em margens e preços baseados em peso.',
      image: './assets/desmembradorPost.webp',
      features: [
        {
          expanded: false,
          title: 'Cálculos de Rendimento',
          description:
            'Simplifique os cálculos de rendimento para vários cortes de carne.',
        },
        {
          expanded: false,
          title: 'Comparação e Análise',
          description:
            'Compare dados de rendimento entre cortes e fornecedores.',
        },
        {
          expanded: false,
          title: 'Estimativa de Lucro',
          description:
            'Preveja ganhos potenciais com base em margem e preços baseados em peso.',
        },
      ],
      techs: [
        'Angular',
        'Framework Ionic',
        'Autenticação Firebase, Firestore, Notificações Push',
        'Ainda em desenvolvimento',
      ],
      urlText: 'Website',
      url: 'https://aasoftware.web.app/products?app=desmembrador',
    },
    {
      id: 4,
      title:
        'Criado com Paixão: Um Portfólio de Design Limpo, Alto Desempenho e Excelência com Angular 17',
      description:
        'Bem-vindo ao meu portfólio, um testemunho de minha paixão inabalável por criar experiências digitais visualmente cativantes e impecáveis em termos de funcionalidade. Como um desenvolvedor front-end habilidoso, eu combino meticulosamente princípios de design limpo com tecnologias de ponta para oferecer soluções que não apenas envolvem os usuários, mas também impulsionam resultados comerciais.',
      image: './assets/portfolio.webp',
      features: [
        {
          expanded: false,
          title: 'Alcançando Excelência no PageSpeed',
          description:
            'Criar sites de alto desempenho é crucial para um portfólio bem-sucedido. Ao aderir às melhores práticas, como otimização da estrutura do código, minimização do tamanho dos recursos, aproveitamento de técnicas de cache e garantia de carregamento eficiente de imagens, você pode alcançar consistentemente altas pontuações no Insights do PageSpeed.',
        },
        {
          expanded: false,
          title: 'Estética e Funcionalidade em Harmonia',
          description:
            'Acredito que o design de um site não deve ser apenas uma camada superficial, mas sim uma parte integrante de sua funcionalidade. Minha abordagem de design é profundamente enraizada no minimalismo, garantindo que cada elemento sirva a um propósito e contribua para uma experiência do usuário descomplicada e intuitiva. Eu elaboro meticulosamente códigos HTML e CSS, aderindo aos últimos padrões da web e melhores práticas para criar interfaces visualmente atraentes e responsivas que se adaptam perfeitamente a qualquer dispositivo.',
        },
        {
          expanded: false,
          title: 'Compromisso com a Excelência',
          description:
            'Meu compromisso com a excelência vai além da proficiência técnica. Estou comprometido em seguir as melhores práticas da indústria, garantindo que meu código esteja bem documentado, seja testado unitariamente e seja otimizado para desempenho.',
        },
      ],
      techs: ['HTML', 'CSS', 'Angular 17', 'Hospedagem Firebase'],
      urlText: 'GitHub',
      url: 'https://github.com/aasouzadev/aasportfolio',
    },
  ];

  projectDetailsEs: ProjectDetails[] = [
    {
      id: 0,
      title: 'Coletor Fácil',
      description:
        '¡El Coletor Fácil, la solución definitiva para una gestión de inventario eficaz y segura! Diseñado para hacer que el proceso sea fácil, rápido y accesible.',
      image: './assets/coletorfacil.webp',
      features: [
        {
          expanded: false,
          title:
            'Equilibrio de Inventario con Reconocimiento de Código de Barras por IA',
          description:
            'Nuestra solución permite a los usuarios crear balances de inventario sin esfuerzo aprovechando la tecnología inteligente de reconocimiento de código de barras. Esta función garantiza recuentos de inventario rápidos y precisos, capacitando a las empresas para mantener niveles de stock óptimos.',
        },
        {
          expanded: false,
          title: 'Verificación de Recepción a Ciegas',
          description:
            'Con nuestra función de verificación de recepción a ciegas, los usuarios pueden importar facturas y compararlas perfectamente con los datos de los productos recibidos. Este proceso aumenta la precisión y la confiabilidad, brindando a las empresas una mayor confianza en sus procesos de recepción.',
        },
        {
          expanded: false,
          title: 'Base de Datos de Productos de la Comunidad',
          description:
            'Nuestra amplia base de datos de productos de la comunidad ofrece acceso a más de 50,000 entradas de productos. Los usuarios pueden buscar y recuperar fácilmente información detallada sobre varios productos, facilitando la toma de decisiones informadas y la gestión eficiente de inventario.',
        },
      ],
      techs: [
        'Angular 17',
        'Framework Ionic',
        'Capacitor',
        'Autenticación Firebase, Firestore, Notificaciones Push',
        'Nest.js',
        'Infraestructura en la Nube de Oracle (OCI)',
        'Docker',
        'API PIX de Efi',
      ],
      urlText: 'PlayStore',
      url: 'https://play.google.com/store/apps/details?id=com.aasoftware.coletorfacil',
    },
    {
      id: 1,
      title: 'Sitio de AASoftware',
      description:
        'AASoftware capacita a las empresas con aplicaciones innovadoras, mostrando su experiencia y compromiso con la excelencia. Explore su portafolio de aplicaciones y descubra cómo sus soluciones construidas con Ionic & Angular pueden transformar su negocio.',
      image: './assets/aasoftware.webp',
      features: [
        {
          expanded: false,
          title: 'Desbloquea el Poder de Nuestras Aplicaciones',
          description:
            'Embárcate en un viaje a través de nuestro ilustre portafolio de aplicaciones, donde presentamos soluciones Angular e Ionic de primera categoría. Observa de primera mano cómo nuestras revolucionarias aplicaciones Ionic & Angular pueden impulsar su negocio hacia un éxito sin precedentes.',
        },
        {
          expanded: false,
          title: 'Descubre Nuestra Historia',
          description:
            'Revela la narrativa detrás de AASoftware, desde las mentes visionarias de nuestro fundador hasta la esencia misma de nuestra misión. Sumérgete en nuestra historia y comprende la fuerza impulsora detrás de nuestra búsqueda implacable de la excelencia.',
        },
        {
          expanded: false,
          title: 'Conéctate y Transforma tu Negocio',
          description:
            'Ponte en contacto con nosotros y da el primer paso para desbloquear todo el potencial de tu negocio. Colaboremos y revolucionemos la forma en que operas.',
        },
      ],
      techs: [
        'Angular',
        'Framework Ionic',
        'Hospedaje Firebase',
        'FireStore',
        'Nest.js',
      ],
      urlText: 'Sitio Web',
      url: 'https://aasoftware.web.app/',
    },
    {
      id: 3,
      title: 'Desmembrador',
      description:
        'En el mundo dinámico del procesamiento de carne, los cálculos precisos de rendimiento son cruciales para optimizar los beneficios y garantizar operaciones eficientes. Presentamos la aplicación Desmembrador, su solución integral para simplificar los cálculos de rendimiento, comparar resultados entre cortes y proveedores diferentes y generar estimaciones de beneficios según márgenes y precios basados en peso.',
      image: './assets/desmembradorPost.webp',
      features: [
        {
          expanded: false,
          title: 'Cálculos de Rendimiento',
          description:
            'Simplifica los cálculos de rendimiento para varios cortes de carne.',
        },
        {
          expanded: false,
          title: 'Comparación y Análisis',
          description:
            'Compara datos de rendimiento entre cortes y proveedores.',
        },
        {
          expanded: false,
          title: 'Estimación de Beneficios',
          description:
            'Predice ganancias potenciales según márgenes y precios basados en peso.',
        },
      ],
      techs: [
        'Angular',
        'Framework Ionic',
        'Autenticación Firebase, Firestore, Notificaciones Push',
        'Todavía en desarrollo',
      ],
      urlText: 'Sitio Web',
      url: 'https://aasoftware.web.app/products?app=desmembrador',
    },
    {
      id: 4,
      title:
        'Creado con Pasión: Un Portafolio de Diseño Limpio, Alto Rendimiento y Excelencia con Angular 17',
      description:
        'Bienvenido a mi portafolio, un testimonio de mi pasión inquebrantable por crear experiencias digitales visualmente cautivadoras y funcionalmente impecables. Como desarrollador front-end experto, combino meticulosamente principios de diseño limpio con tecnologías de vanguardia para ofrecer soluciones que no solo involucran a los usuarios, sino que también impulsan resultados comerciales.',
      image: './assets/portfolio.webp',
      features: [
        {
          expanded: false,
          title: 'Alcanzando la Excelencia de PageSpeed',
          description:
            'Crear sitios web de alto rendimiento es crucial para un portafolio exitoso. Al adherirse a las mejores prácticas, como la optimización de la estructura del código, la minimización del tamaño de los recursos, el aprovechamiento de técnicas de almacenamiento en caché y garantizar la carga eficiente de imágenes, puede lograr consistentemente altas puntuaciones en Insights de PageSpeed.',
        },
        {
          expanded: false,
          title: 'Estética y Funcionalidad en Armonía',
          description:
            'Creo que el diseño de un sitio web no debe ser solo una capa superficial, sino una parte integral de su funcionalidad. Mi enfoque de diseño está profundamente arraigado en el minimalismo, garantizando que cada elemento sirva a un propósito y contribuya a una experiencia del usuario sin complicaciones e intuitiva. Elaboro meticulosamente códigos HTML y CSS, adhiriéndome a los últimos estándares web y mejores prácticas para crear interfaces visualmente atractivas y receptivas que se adaptan perfectamente a cualquier dispositivo.',
        },
        {
          expanded: false,
          title: 'Compromiso con la Excelencia',
          description:
            'Mi dedicación a la excelencia va más allá de la competencia técnica. Me comprometo a seguir las mejores prácticas de la industria, garantizando que mi código esté bien documentado, sea probado unitariamente y esté optimizado para el rendimiento.',
        },
      ],
      techs: ['HTML', 'CSS', 'Angular 17', 'Hospedaje Firebase'],
      urlText: 'GitHub',
      url: 'https://github.com/aasouzadev/aasportfolio',
    },
  ];

  toggleFeature(feature: any) {
    feature.expanded = !feature.expanded;
  }

  openUrl(urlid: number) {
    window.open(this.projectDetails[this.id].url, '_blank');
  }
}
