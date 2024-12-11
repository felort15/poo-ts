const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12);
date2.getDay();
date2.getTime();
date2.toISOString();


console.log(date);
console.log(date2);



export class MyDate {
  constructor(
    public year: number,
    public month: number,
    public day: number
  ) {}
}
const myDate = new MyDate(1993, 1, 12);
console.log(myDate);

const myDate2 = new MyDate(2022, 11, 31);
console.log(myDate2);
