import {lastItem} from "./last-item";

/** Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. */
export const chunk = <T>(array: T[], size = 1): T[][] => {
    const chunks = [] as T[][];

    let j = 0;

    for (const item of array) {

        if (j === size || chunks.length === 0) {
            chunks.push([]);
            j = 0;
        }

        lastItem(chunks)!.push(item);
        j++;
    }

    return chunks;
};