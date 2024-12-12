//export  class Animal {
//  constructor(public name: string) {}
//lo abstarcto viene de la clase padre en la clase que exportamos
import { Animal, Dog } from './09-protected';

const animal = new Animal('elite');
animal.greeting();

const cheis = new Dog('chais', 'nico');
cheis.greeting();
cheis.woof(5);
