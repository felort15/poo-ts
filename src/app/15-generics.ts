import axios from 'axios';
//function getValue(value: number | string) {
//  return value;
//}


function getValue<myType>(value: myType) {
  const arr: myType[] = [value];
  return arr;
}


getValue<number>(12)[0].toFixed();
getValue<string>('12')[0].toLowerCase();
getValue<number[]>([1, 2, 3])[0].map((item) => item * 2);


//Promise<boolean>
//axios.get<string[]>
