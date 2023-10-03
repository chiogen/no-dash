export const getRandomFloat = (max: number) =>
    Math.random() * max;

export const getRandomFloatInRange = (min: number, max: number) =>
    min + getRandomFloat(max - min);

export const getRandomInt = (max: number) =>
    Math.floor(Math.random() * max);

export const getRandomIntInRange = (min: number, max: number) =>
    min + getRandomInt(max - min);
