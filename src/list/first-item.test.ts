import test from 'ava';
import { firstItem } from './first-item.js';

test('Should return first item from list', t => {

    const inputArray = [0, 1, 2, 3, 4, 5];
    const first = firstItem(inputArray);

    t.is(first, 0);

});