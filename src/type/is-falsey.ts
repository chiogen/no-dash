type Falsey = false | 0 | undefined | null | "";

export const isFalsey = (input: unknown): input is Falsey => !input;