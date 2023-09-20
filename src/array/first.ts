/**
 * Returns the first item in an array, or `undefined` if the input array is empty
 */
export const first = <T>(input: T[]): T => input.length > 0
    ? input[0]
    : undefined;