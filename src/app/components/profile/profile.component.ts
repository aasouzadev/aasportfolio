import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  openContact() {
    const url = 'https://api.whatsapp.com/send?phone=5571981014992';
    window.open(url, '_blank');
  }
  openLinkedIn() {
    const url = 'https://www.linkedin.com/in/andre-de-almeida-souza/';
    window.open(url, '_blank');
  }
  openGithub() {
    const url = 'https://github.com/aasouzadev';
    window.open(url, '_blank');
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
