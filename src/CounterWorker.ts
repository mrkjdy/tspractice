// A counter worker

import { workerData } from 'worker_threads';

const max: number = workerData.max;
const count: Uint32Array = workerData.count;

for (let expected = Atomics.load(count, 0); expected < max; expected = Atomics.load(count, 0)) {
  Atomics.compareExchange(count, 0, expected, expected + 1);
}
