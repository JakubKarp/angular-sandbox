import { InputService } from './../input-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serv-left',
  templateUrl: './serv-left.component.html',
  styleUrls: ['./serv-left.component.css'],
  providers: []
})
export class ServLeftComponent implements OnInit {

  @Input() allUsers: {name: string}[] = [];

  constructor(private inputService: InputService) { }

  ngOnInit(): void {
  }

  takDeepeData() {
    // this.inputService.inputServiceHandle(this.leftText);
    // this.users = this.inputService.users;
    // console.log("ServLeftComponent -> takDeepeData -> this.inputService.users;", this.inputService.users);
  }
}
