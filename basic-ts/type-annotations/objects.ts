const profile = {
  name: "Daniel",
  age: 30,
  coords: {
    lat: 0,
    long: 14,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, long },
} = profile;
