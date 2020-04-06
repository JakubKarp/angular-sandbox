import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputname',
  templateUrl: './inputname.component.html',
  styleUrls: ['./inputname.component.css']
})
export class InputnameComponent implements OnInit {
  textExamp = '';
  textExampSecond = 'Example';

  constructor() { }

  ngOnInit(): void {
  }

  onWriteSomething(event: Event) {
    this.textExamp = (event.target as HTMLInputElement).value;
  }

}
