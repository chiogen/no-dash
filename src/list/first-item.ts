/**
 * Returns the firstItem item in an list, or `undefined` if the input list is empty
 */
export function firstItem<T>(input: T[]): T {
    return input.length > 0
        ? input[0]
        : undefined;
}