// A counter worker

import { workerData } from 'worker_threads';

const max: number = workerData.max;
const count: Uint32Array = workerData.count;
let expected: number;
while (1) {
    expected = Atomics.load(count, 0);
    if (expected >= max)
        break;
    Atomics.compareExchange(count, 0, expected, expected + 1);
}