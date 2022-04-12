export class MyService {
  static instance: MyService | null = null;

  private constructor(public name: string) {}

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
  getName() {
    return this.name;
  }
}

const myService = MyService.create('service 1');
console.log(myService.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());

console.log(myService === myService2);
