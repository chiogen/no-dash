/**
 * Returns the last item of an array, or `undefined` if the array is empty.
 */
export const last = <T>(input: T[]) => input.length > 0
    ? input[input.length - 1]
    : undefined;