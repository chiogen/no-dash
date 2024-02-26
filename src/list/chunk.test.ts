import test from 'ava';
import { chunk } from './chunk.js';

test('Should split big array into chunks ot 5', t => {

    const inputArray = new Array(100).map((_x, i) => i);
    const chunkSize = 5;

    const chunks = chunk(inputArray, chunkSize);

    for (const [i, chunk] of chunks.entries()) {

        // Skip last item, as it can have any length except 0
        if (i === chunks.length - 1)
            continue;

        t.is(chunk.length, chunkSize);

    }

});