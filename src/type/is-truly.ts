type ExcludeFalsey<T> = Exclude<T, false | 0 | undefined | null | "">

export const isTruly = <T = unknown>(input: T): input is ExcludeFalsey<T> => !!input;