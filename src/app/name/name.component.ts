import { Component, OnInit } from '@angular/core';
import { InputService } from './../input-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name = '';
  id = '';
  users: {name: string}[] = [];

  constructor(
    private inputService: InputService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // this.users = this.inputService.users;
    // this.name = this.users.filter(user => user.name[this.id])[0].name;
  }

}
