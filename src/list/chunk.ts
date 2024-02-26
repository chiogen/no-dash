import { lastItem } from "./last-item";

/** Creates an list of elements split into groups the length of size. If list can't be split evenly, the final chunk will be the remaining elements. */
export function chunk<T>(input: Iterable<T>, size = 1): T[][] {
    const chunks = [] as T[][];

    let j = 0;

    for (const item of input) {

        if (j === size || chunks.length === 0) {
            chunks.push([]);
            j = 0;
        }

        lastItem(chunks)!.push(item);
        j++;
    }

    return chunks;
}