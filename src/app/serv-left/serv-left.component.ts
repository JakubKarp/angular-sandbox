import { InputService } from './../input-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serv-left',
  templateUrl: './serv-left.component.html',
  styleUrls: ['./serv-left.component.css'],
  providers: []
})
export class ServLeftComponent implements OnInit {
  deepName = '';
  @Input() allUsers: {name: string}[] = [];

  constructor(private inputService: InputService) { }

  ngOnInit(): void {
  }

  takDeepeData() {
    this.inputService.showNames.subscribe(
      // this event emmiter subscribe from comp. deep, but is triggering on emit on button in comp. deep
      (eName: string) => { console.log('Event emmiter:', eName); this.deepName = eName; }
    );
  }
}
