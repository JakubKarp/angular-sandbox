import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent implements OnInit {
  // dekorator input pozwala udostępnić typy do komponentu rodzica - na zewnątrz
  @Input() element: {name: string};

  // jeśli w nawiasie podasz inną nazwę, to bęzie dostępne nie jako element, ale jako ta nazwa: [otherName]
  // @Input('otherName') element: {type: string};

  constructor() { }

  ngOnInit(): void {
  }

}
