export class Myservice {
  private static instance: Myservice | null = null;

private constructor(private name: string) {}

getName() {
  return this.name;
}

static createInstance(name: string) {
  if (!Myservice.instance) {
    Myservice.instance = new Myservice(name);
  }
  return Myservice.instance;
}
}

const myService = Myservice.createInstance('service');
console.log(myService.getName());

const myService2 = Myservice.createInstance('service2');
console.log(myService2.getName());

console.log(myService === myService2);
