import { InputService } from './../input-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serv-right-deep',
  templateUrl: './serv-right-deep.component.html',
  styleUrls: ['./serv-right-deep.component.css'],
  providers: [],
})
export class ServRightDeepComponent implements OnInit {
  inputText = '';
  constructor(private inputService: InputService) {}

  ngOnInit(): void {}

  onWriteSomething(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;

    // zła praktyka, tak service nie działa
    // const service = new InputService();
    // service.inputServiceHandle(this.inputText);
  }

  // tak się robi - service: w constructor (jeśli wpiszesz w provider - to on będzie tylko lokalny - dla jego dzieci
  // w provider rejestrujemy service na najwyższym rodzicu, z którego chcemy mieć dostęp w jego dzieciach
  addNameToService(eName = this.inputText) {
    this.inputService.addName(eName);
    this.inputService.showNames.emit(eName);
  }
}
