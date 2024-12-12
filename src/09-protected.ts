export  class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething() {
    console.log('doSomething','Doo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!', `${this.name} `);
    }
    this.doSomething();
  }
}


const scooby = new Dog('Scooby', 'nico');
//scooby.name = 'otronombre';
scooby.woof(5);
