import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly urls = [
    'https://www.linkedin.com/in/andre-de-almeida-souza/',
    'https://t.me/aasouzadev',
    ''
  ];

  openUrl(urlid: number) {
    window.open(this.urls[urlid], '_blank');
  }
}
