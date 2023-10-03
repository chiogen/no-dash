/**
 * Returns the firstItem item in an array, or `undefined` if the input array is empty
 */
export const firstItem = <T>(input: T[]): T => input.length > 0
    ? input[0]
    : undefined;