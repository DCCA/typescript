// we can use interfaces to re-use a type, instead of trying to write it every time we use it
// The interface just check if you have the stated properties.
// If the object has more then the properties states, it won't be a problem
interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "green",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Drink has ${this.sugar}`;
  },
};

const printVehicle = (car: Reportable): void => {
  //   console.log(`
  //         Name: ${car.name},
  //         Year: ${car.year}
  //     `);
  console.log(car.summary());
};

printVehicle(oldCivic);
// because the Drink object has summary functions, it can use the other functions as well
printVehicle(drink);
