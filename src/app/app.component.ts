import { InputService } from './input-service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // css są enkapsulowane. żeby to zmenić po kropce podpowiedzi
  // encapsulation: ViewEncapsulation.Emulated - default, jeszcze jest None oraz Native - dla wspierających przeglądarek
  providers: [InputService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-sandbox';
  liList = [{ name: 'Apa' }, { name: 'Gapa' }];
  littleNumber = 1;
  littleName = '';
  fromViewChild = '';
  users: {name: string}[] = [];

  // do elementów można się również dodstać za pomocą refów z Angulara: @ViewChild i @ContnetChild
  // w html trzeba zrobić refa: np. #contentFromParagraph
  @ViewChild('contentFromParagraph', { static: true }) parag: ElementRef;

  // service
  constructor(private inputService: InputService) { }

  // to jest element cyklu życia komponentu
  // trzeba zaimportować te metody i dodać interfejs do klasy
  ngOnInit(): void {
    this.users = this.inputService.users;
  }
  // są jeszcze poniższe metody wywoływane w takiej kolejności
  // ngOnChanges
  // ngDoCheck - cokolwiek się zmieni
  // ngAfterContentInit - na inicjalizację kontentu - wywołane tylko raz
  // ngAfterContentChecked
  // ngAfterViewInit - tu dopiero @contentChild się pojawia
  // ngAfterViewChecked
  // ngOnDestroy

  // ngAfterViewInit() {
  //   this.fromViewChild = this.parag.nativeElement.textContent;
  // }

  ngDoCheck() {
    this.fromViewChild = this.parag.nativeElement.textContent;
  }

  addOneNumber(dataFromChild: { lulu: string }) {
    this.littleNumber = this.littleNumber + 1;
    this.littleName = dataFromChild.lulu;
  }

}
