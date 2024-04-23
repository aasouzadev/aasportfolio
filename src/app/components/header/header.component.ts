import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt', 'es']);
    translate.setDefaultLang('en');
    const lang = localStorage.getItem('lang');
    if (lang) {
      translate.use(lang);
    }
  }
  ngOnInit(): void {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode === 'true') {
      this.isDarkMode = true;
      this.Darkmode();
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }

  toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    if (!menu) {
      console.error('menu element not found');
      return;
    }

    if (!icon) {
      console.error('icon element not found');
      return;
    }

    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    this.Darkmode();
  }

  Darkmode() {
    const body = document.getElementsByTagName('body')[0];
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}
