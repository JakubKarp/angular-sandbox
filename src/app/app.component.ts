import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // css są enkapsulowane. żeby to zmenić po kropce podpowiedzi
  // encapsulation: ViewEncapsulation.Emulated - default, jeszcze jest None oraz Native - dla wspierających przeglądarek
})
export class AppComponent implements OnInit, AfterViewInit, DoCheck {
  title = 'angular-sandbox';
  liList = [{ name: 'Apa' }, { name: 'Gapa' }];
  littleNumber = 1;
  littleName = '';
  fromViewChild = '';

  // do elementów można się również dodstać za pomocą refów z Angulara: @ViewChild i @ContnetChild
  // w html trzeba zrobić refa: np. #contentFromParagraph
  @ViewChild('contentFromParagraph', {static: true}) parag: ElementRef;

  constructor() {}

  // to jest element cyklu życia komponentu
  // trzeba zaimportować te metody i dodać interfejs do klasy
  ngOnInit(): void {}
  // są jeszcze poniższe metody wywoływane w takiej kolejności
  // ngOnChanges
  // ngDoCheck - cokolwiek się zmieni
  // ngAfterContentInit - na inicjalizację kontentu - wywołane tylko raz
  // ngAfterContentChecked
  // ngAfterViewInit - tu dopiero @contentChild się pojawia
  // ngAfterViewChecked
  // ngOnDestroy

    ngAfterViewInit() {
      this.fromViewChild = this.parag.nativeElement.textContent;
    }

    ngDoCheck() {
      this.fromViewChild = this.parag.nativeElement.textContent;
    }



  addOneNumber(dataFromChild: { lulu: string }) {
    this.littleNumber = this.littleNumber + 1;
    this.littleName = dataFromChild.lulu;
  }
}
