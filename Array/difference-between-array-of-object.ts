import { Dog } from "../models/Dog";
import { Fish } from "../models/Fish";

export abstract class ArrayDiff {
  static run() {
    let dogs: Array<Dog> = [new Dog("Oscar"), new Dog("René")];
    let fishes: Array<Fish> = [
      new Fish("Dori"),
      new Fish("Marin"),
      new Fish("Némo")
    ];

    let pets: Array<Dog | Fish> = [...dogs, ...fishes];
    let defined: Array<Dog | Fish> = [...fishes];

    console.log("pets", pets);

    const results = pets.filter(
      ({ name: id1 }) => !defined.some(({ name: id2 }) => id2 === id1)
    );

    console.log("intersection -> ", results);
  }
}
