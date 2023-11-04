import { isTruly, Truly } from "../type/is-truly";

type CompactedList<T> = Truly<T>[];

export function excludeFalsy<T>(input: IterableIterator<T>): CompactedList<T> {
    const result = [] as CompactedList<T>;

    for (const item of input)
        if (isTruly(item))
            result.push(item);

    return result;
}