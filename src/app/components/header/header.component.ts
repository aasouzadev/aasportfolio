import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode: boolean = false;

  toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu) {
      console.error("menu element not found");
      return;
    }

    if (!icon) {
      console.error("icon element not found");
      return;
    }

    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.getElementsByTagName('body')[0];
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

}
