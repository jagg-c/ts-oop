console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 8, 3, 5, 4));

export class MyMath {
  static readonly PI = 3.14;

  static max(...number: number[]) {
    return number.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

console.log('MyMath.PI:', MyMath.PI);
console.log('MyMath.max:', MyMath.max(5, 1, 500, 2));
