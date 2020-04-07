import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-sendevent',
  templateUrl: './sendevent.component.html',
  styleUrls: ['./sendevent.component.css'],
})
export class SendeventComponent implements OnInit {
  // żeby wypchnąć do rodzica, musimy użyć event emittera
  // dekorator output pozwala wypchnać do rodzica
  @Output() addNumber = new EventEmitter<{ lulu: string }>();

  luluName = 'this go from child';
  refElementInnerText = 'Try click to take ref innerText from left button';

  constructor() {}

  ngOnInit(): void {}

  sendEvent() {
    this.addNumber.emit({ lulu: this.luluName });
  }

  takeRef(element: HTMLButtonElement) {
    // element - to cały element DOM
    this.refElementInnerText = element.innerText;
  }
}
