const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Transform the array in a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// Type of tuple
type Drink = [string, boolean, number];

const pepsi2: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

// Why do we need tuple?
// Is very hard to read, so we won't be using too much
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
