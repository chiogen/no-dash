type CompactedList<T> = Exclude<T, false | 0 | undefined | null | "">[];

export const compact = <T>(array: T[]): CompactedList<T> => array
    .filter(value => !!value) as CompactedList<T>;