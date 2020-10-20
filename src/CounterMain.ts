// A program to count from 0 to max using worker_threads and atomics

import path from 'path';
import { Worker } from 'worker_threads';

// Take the number of workers as a command-line argument
const numWorkers = +process.argv[2];
const max = +process.argv[3];
console.log(`Counting with ${numWorkers} workers to ${max}`);

const sharedMem = new SharedArrayBuffer(1 * Uint32Array.BYTES_PER_ELEMENT);
const count = new Uint32Array(sharedMem);
const workers: Worker[] = [];

let numFinished = 0;
// Start timing
const start = Date.now();
// Run the workers
for (let i = 0; i < numWorkers; i++) {
  workers.push(new Worker(path.join(__dirname, 'CounterWorker.js'), {
    workerData: { max, count }
  }).on('exit', () => {
    numFinished++;
    // Print the stats if done
    if (numFinished >= numWorkers) {
      const duration = Date.now() - start;
      console.log(`Counted to ${count}`);
      console.log(`Completed in ${duration / 1000} seconds`);
    }
  }));
}

// Benchmark results counting to 10000000
// (Ran on a 6600k)
// CounterMain.ts
// Number of workers    CounterMain.ts  main.cpp(-O0)   main.cpp(-O2)
// 1                    0.342           0.240           0.091
// 2                    0.656           0.608           0.393
// 4                    0.859           0.863           0.665
// 8                    0.936           0.868           0.653
// 16                   1.041           0.861           0.656
// 32                   1.307           0.849           0.614

// Looks like there is a lot of contention!
