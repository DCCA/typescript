// type annotation -  we tell to ts what the type is
// type inference - ts try to guess the type for us

let apples: number = 5;
apples = 10;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in object
let now: Date = new Date();

// Array - [] tells that is an array
let colors: string[] = ["a", "red", "blue"];
let numbers: number[] = [1, 2, 3, 4];
let bool: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal - Defines an object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions literal
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(1090);

// When to use annotations
// 1) functions when returns the 'any' type
// Avoid any at all costs
const json = '{"x":10, "y", 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable and use it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables whose ty[pe cannot be inferred correctly
let number = [-10, -1, 12];
// Give a or statement for the type inside a var
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}
