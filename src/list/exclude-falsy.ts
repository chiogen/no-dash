import { isTruly, Truly } from "../type/is-truly.js";

type CompactedList<T> = Truly<T>[];

export function excludeFalsy<T>(input: Iterable<T>): CompactedList<T> {
    const result = [] as CompactedList<T>;

    for (const item of input)
        if (isTruly(item))
            result.push(item);

    return result;
}