import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
// możesz generować z konsoli: ng g d nazwa

@Directive({
  selector: '[appBetterDirevtive]'
})
export class BetterDirevtiveDirective implements OnInit {
  // inny sposób, (obok @HostListener) ale wykorzystuje również @HostListener
  //  wtedy można się bezpośrednio odnieść do this.backgroundColor
  @HostBinding('style.backgroundColor') backgroundColor = 'darkslateblue';

  // można też zainkludować z góry coś
  @Input() fwDefault: string;
  @Input() fwHovered: string;
  @HostBinding('style.fontWeight') fontWeight: string;


  // to potrzwebne do @HostListener
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'darkorange');
    this.fontWeight = '600';
  }

  // jak dynamicznie dostawać się do elementów
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '24px');
    this.backgroundColor = 'red';
    this.fontWeight = this.fwHovered;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '16px');
    this.backgroundColor = 'darkslateblue';
    this.fontWeight = this.fwDefault;
  }


}
