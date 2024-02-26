import test from 'ava';
import { excludeFalsy } from './exclude-falsy.js';

test('Should remove all falsy items from list', t => {

    const inputList = [1, 0, false, true, null, undefined, {}];
    const truthyList = excludeFalsy(inputList);

    for (const item in truthyList)
        t.truthy(item);

});