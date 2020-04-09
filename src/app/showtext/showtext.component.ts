import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtext',
  templateUrl: './showtext.component.html',
  styleUrls: ['./showtext.component.css']
})
export class ShowtextComponent implements OnInit {
  yesshow = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggletext() {
    this.yesshow = !this.yesshow;
  }

  getColor() {
    return !this.yesshow && 'darkcyan' ;
  }

}
