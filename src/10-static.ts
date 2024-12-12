class MyMath {
  static readonly PI = 3.14;

  static Max (...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, current) => (max > current ? max : current), numbers[0]);
  }
}

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.Max(1, 2, 3, 11114, 5));

const numbers = [1, 2, 3, 11114, 5.556546545];
console.log('MyMath.Max', MyMath.Max(...numbers));
