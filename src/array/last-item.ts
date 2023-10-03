/**
 * Returns the lastItem item of an array, or `undefined` if the array is empty.
 */
export const lastItem = <T>(input: T[]): T => input.length > 0
    ? input[input.length - 1]
    : undefined;