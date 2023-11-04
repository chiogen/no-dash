export type Falsey = false | 0 | undefined | null | "";

export function isFalsey(input: unknown): input is Falsey {
    return !input;
}