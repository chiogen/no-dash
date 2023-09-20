/**
 * Ensures `value` is between `lowerLimit` and `upperLimit`
 */
export const clamp = (value: number, lowerLimit: number, upperLimit: number): number =>
    Math.max(lowerLimit, Math.min(value, upperLimit));
