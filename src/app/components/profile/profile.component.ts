import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  openLinkedIn() {
    throw new Error('Method not implemented.');
  }
  openGithub() {
    throw new Error('Method not implemented.');
  }
  downloadCV() {
    const pdfUrl = './../../../assets/AndreSouzaCV.pdf';
    const fileName = 'AndreSouzaCV.pdf';

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Erro ao baixar o arquivo PDF', error);
      });
  }
}
