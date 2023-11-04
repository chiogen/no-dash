/**
 * Returns the lastItem item of an list, or `undefined` if the list is empty.
 */
export function lastItem<T>(input: T[]): T {
    return input.length > 0
        ? input[input.length - 1]
        : undefined;
}