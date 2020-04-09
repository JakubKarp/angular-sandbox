import { LogService } from './log-service';
import { Injectable, EventEmitter } from '@angular/core';

// to incjet other service you need to use @Injectable() and add this service in constructor
@Injectable()
export class InputService {
  users = [
    {name: 'Artur'},
    {name: 'Darek'},
    {name: 'Arek'},
  ];

  constructor(private logService: LogService) { }

  // this method allows you to use emmit/subscribe technique in components (serv-left / serv-right-deep)
  showNames = new EventEmitter<string>();

  addName(newName: string) {
    this.users.push({name: newName});
    this.logService.inputServiceHandle(this.users);
  }

}
