// When just initializing, use annotation
const example: number[] = [];
// Uses type inference
const carMakers = ["ford", "toyota", "tesla"];
//
const dates = [new Date(), new Date()];
// Array of arrays
const carsByMake = [["f150"], ["corolla"], ["camaro"]];
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); You cannot push numbers in a array of string

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible array
const importantDates = [new Date(), "2020-10-10"];
// Using annotations
const importantDates2: (Date | string)[] = [new Date(), "2020-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());

// When to use multiple types
