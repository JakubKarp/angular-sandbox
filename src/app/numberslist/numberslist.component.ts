import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberslist',
  templateUrl: './numberslist.component.html',
  styleUrls: ['./numberslist.component.css']
})
export class NumberslistComponent implements OnInit {
  numbers = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
