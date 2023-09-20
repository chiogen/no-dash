
export const round = (value: number, decimalPlaces = 0) => {
    const s = Math.max(0, decimalPlaces);
    const scale = parseFloat('1e' + s);
    return Math.round(value * scale) / scale;
};
