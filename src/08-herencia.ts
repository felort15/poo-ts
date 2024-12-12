export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
fifi.greeting();
console.log(fifi.greeting());

const scooby = new Dog('Scooby', 'nico');
scooby.move();
scooby.greeting();
console.log(scooby.greeting());
scooby.woof(5);
console.log(scooby.owner);
