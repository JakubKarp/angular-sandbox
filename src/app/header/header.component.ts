import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles: [`
    .header-container {
      background-color: darkcyan
    }
  `]
})

export class HeaderComponent {
  title = 'Angular';
  num = 1;
  is = true;
  disa = true;
  paragraphText = 'Oh, I am paragraphText';

  getNumber() {
    return this.num;
  }

  onCreateParagraphText() {
    this.paragraphText = 'Oh, You clicked something';
  }

}
