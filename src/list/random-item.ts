import { getRandomInt } from "../math/random.js";

export function randomItem<T>(list: ReadonlyArray<T>): T {
    return list[getRandomInt(list.length - 1)];
}