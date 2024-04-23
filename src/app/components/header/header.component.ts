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
  selectedLanguage: string = '🇺🇸';
  isDarkMode: boolean = false;
  isDropdownOpen: boolean = false;
  languages = [
    { name: '🇧🇷', value: 'pt' },
    { name: '🇺🇸', value: 'en' },
    { name: '🇪🇸', value: 'es' },
  ];
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
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.selectedLanguage = this.languages.find((l) => l.value === lang)
        ?.name as string;
      this.translate.use(lang);
    }
  }

  switchLanguage(language: string) {
    this.selectedLanguage = this.languages.find((l) => l.value === language)
      ?.name as string;
    this.isDropdownOpen = false;
    this.toggleDropdown();
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
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

  toggleLangMenu() {
    const menu = document.querySelector('.menuLang-links');
    const icon = document.querySelector('.hamburgerLang-icon');

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
}
