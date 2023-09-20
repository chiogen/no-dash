export function clamp(value: number, lowerLimit: number, upperLimit: number) {
    return Math.max(lowerLimit, Math.min(value, upperLimit));
}