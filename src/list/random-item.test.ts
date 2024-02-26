import test from 'ava';
import { randomItem } from './random-item.js';

test('Should return a random item from a list', t => {

    const list = [0, 1, 2, 3, 4, 5];
    const item = randomItem(list);

    const itemIsInList = list.some(x => x === item);
    t.true(itemIsInList);

});