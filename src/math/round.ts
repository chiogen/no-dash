/**
 * Simple rounding function that works with decimals
 */
export function round(value: number, decimalPlaces = 0): number {
    const s = Math.max(0, decimalPlaces);
    const scale = parseFloat('1e' + s);
    return Math.round(value * scale) / scale;
}
