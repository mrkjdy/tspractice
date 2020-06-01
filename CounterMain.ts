// A program to count from 0 to max using worker_threads and atomics

import worker_threads from 'worker_threads';
import path from 'path';

// Take the number of workers as a command-line argument
const numWorkers = +process.argv[2];
const max = +process.argv[3];
console.log(`Counting with ${numWorkers} workers to ${max}`);

const sharedMem = new SharedArrayBuffer(1 * Uint32Array.BYTES_PER_ELEMENT);
const count = new Uint32Array(sharedMem);
const workers = new Array<worker_threads.Worker>();

let numFinished = 0;
// Start timing
const start = Date.now();
// Run the workers
for (let i = 0; i < numWorkers; i++) {
    workers.push(new worker_threads.Worker(path.join(__dirname, 'counter.js'),
        { workerData: {"max": max, "count": count} })
        .on('exit', () => {
            numFinished++;
            // Print the stats if done
            if (numFinished >= numWorkers) {
                const duration = Date.now() - start;
                console.log(`Counted to ${count}`);
                console.log(`Completed in ${duration / 1000} seconds`);
            }
        })
    );
}