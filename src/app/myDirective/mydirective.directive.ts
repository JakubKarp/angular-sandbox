import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyOwnDirective]'
})

export class MyDirective implements OnInit {
  constructor(private elementToTouch: ElementRef) {}


  // to trzeba zarejestrować w app.module
  // wykorzystujemy w gównej app.html - do elementu dodajemy po prostu: appMyOwnDirective
  ngOnInit() {
    this.elementToTouch.nativeElement.style.color = 'white';
  }
}
