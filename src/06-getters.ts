class MyDate {
  constructor(
    public year: number=1993,
    public month: number = 7,
    private _day: number = 9,
  ) {}

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
      this.normalizeDate();
    } else if (type === 'months') {
      this.month += amount;
      this.normalizeDate();
    } else if (type === 'years') {
      this.year += amount;
    } else {
      throw new Error('Invalid type');
    }
  }

  private normalizeDate() {
    // Normalize the day and month
    let daysInMonth = this.getDaysInMonth(this.year, this.month);
    while (this.day > daysInMonth) {
      this._day -= daysInMonth;
      this.month++;
      if (this.month > 12) {
        this.month = 1;
        this.year++;
      }
      daysInMonth = this.getDaysInMonth(this.year, this.month);
    }
  }

  private getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }
  get day() {
    return this._day;
  }
  get isLeapYear(): boolean {
    if (this.year % 4 === 0) {
      if (this.year % 100 === 0) {
        return this.year % 400 === 0;
      } else {
        return true;
      }
    }
    return false;
  }
}

const myDate = new MyDate(2017, 1, 1);
console.log(myDate.printFormat());

const myDate2 = new MyDate(2000, 1, 1);
console.log(myDate2.printFormat() );

const myDate3 = new MyDate(2024, 1, 1);
console.log(myDate3.printFormat());

const myDate4 = new MyDate(2016, 1, 1);
console.log(myDate4.printFormat());

console.log(myDate.isLeapYear);
console.log(myDate2.isLeapYear);
console.log(myDate3.isLeapYear);
console.log(myDate4.isLeapYear);



