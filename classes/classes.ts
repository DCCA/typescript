// Methods
class Vehicle {
  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("Vroom");
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
// car.honk();
car.startDriving();

// Another
// Values
class Vehicle2 {
  // color: string = "red";
  // shortcut to declare a constructor
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Beep");
  }
}

const vei = new Vehicle2("orange");
console.log(vei.color);

// Inheritance
class Car2 extends Vehicle2 {
  // Do not add public to color, because if so, it will override the color from the parent
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Vroom");
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car2(10, "black");
console.log(car2.color);
console.log(car2.wheels);
