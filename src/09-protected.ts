export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doing something');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
    console.log('moving as a dog');
    super.move();
  }
}

const chais = new Dog('chais', 'Jhony');
// chais.name = 'other name';
// chais.doSomething();
chais.woof(1);
chais.move();
