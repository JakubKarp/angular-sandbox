export class InputService {
  users = [
    {name: 'Artur'},
    {name: 'Darek'},
    {name: 'Arek'},
  ];

  // inputServiceHandle(message: string) {
  //   console.log('service', message );
  // }

  addName(newName: string) {
    this.users.push({name: newName});
    console.log(this.users);
  }
}
