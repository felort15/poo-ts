class MyDate {
  constructor(
    public year: number,
    public month: number,
    public day: number
  ) {}

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
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
      this.day -= daysInMonth;
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
}

export { MyDate };

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
