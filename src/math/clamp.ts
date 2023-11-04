/**
 * Ensures `value` is between `lowerLimit` and `upperLimit`
 */
export function clamp(value: number, lowerLimit: number, upperLimit: number): number {
    return Math.max(lowerLimit, Math.min(value, upperLimit));
}
