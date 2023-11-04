export function getRandomFloat(max: number) {
    return Math.random() * max;
}

export function getRandomFloatInRange(min: number, max: number) {
    return min + getRandomFloat(max - min);
}

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function getRandomIntInRange(min: number, max: number) {
    return min + getRandomInt(max - min);
}
