import test from 'ava';
import { lastItem } from './last-item.js';

test('Should get last item of list', t => {

    const inputArray = [0, 1, 2, 3, 4, 5];
    const first = lastItem(inputArray);

    t.is(first, 5);

});