import test from 'ava';
import { clamp } from './clamp.js';

test('Should return 2 when passing (1, [2, 5])', t => {
    const result = clamp(1, 2, 5);
    t.is(result, 2);
});

test('Should return 4 when passing (4, [2, 5])', t => {
    const result = clamp(4, 2, 5);
    t.is(result, 4);
});