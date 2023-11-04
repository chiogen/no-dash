export type Truly<T> = Exclude<T, false | 0 | undefined | null | "">

export function isTruly<T = unknown>(input: T): input is Truly<T> {
    return !!input;
}