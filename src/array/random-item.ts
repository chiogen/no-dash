import { getRandomInt } from "../math/random";

export const randomItem = <T>(list: ReadonlyArray<T>): T =>
    list[getRandomInt(list.length - 1)];