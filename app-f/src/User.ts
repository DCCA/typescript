import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  // Declaring the variables and the types
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
  `;
  }
}
