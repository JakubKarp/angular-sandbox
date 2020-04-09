import { LogService } from './log-service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class InputService {
  users = [
    {name: 'Artur'},
    {name: 'Darek'},
    {name: 'Arek'},
  ];

  constructor(private logService: LogService) { }

  showNames = new EventEmitter<string>();

  addName(newName: string) {
    this.users.push({name: newName});
    this.logService.inputServiceHandle(this.users);
  }

}
