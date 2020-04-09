import { LogService } from './log-service';
import { Injectable } from '@angular/core';
@Injectable()
export class InputService {
  users = [
    {name: 'Artur'},
    {name: 'Darek'},
    {name: 'Arek'},
  ];

  constructor(private logService: LogService) { }

  addName(newName: string) {
    this.users.push({name: newName});
    this.logService.inputServiceHandle(this.users);
  }
}
