export class Myservice {

constructor(private name: string) {}

getName() {
  return this.name;
}
}

const myService = new Myservice('service');
console.log(myService.getName());

const myService2 = new Myservice('service2');
console.log(myService2.getName());

console.log(myService === myService2);
