type QueueNode<K, V> = {
    key: K;
    value: V;
    next?: QueueNode<K, V>;
    prev?: QueueNode<K, V>;
}

/**
 * A queue with some of the same methods and properties of a map.
 * Features O(1) push(), pop(), delete(), and has().
 */
export class MapQueue<K, V> {
    private nodeMap: Map<K, QueueNode<K, V>>;
    private head?: QueueNode<K, V>;
    private tail?: QueueNode<K, V>;
    public length: number;

    /**
     * Constructs a new queue in the order in which the entries are given.
     * @param entries An array of key value pairs.
     */
    constructor(entries?: readonly (readonly [K, V])[] | null | undefined) {
      this.nodeMap = new Map<K, QueueNode<K, V>>();
      this.length = 0;
      if (entries) {
        for (const entry of entries) {
          this.push(entry[0], entry[1]);
        }
      }
    }

    /**
     * Pushes a value onto the back of the queue.
     * If a duplicate key is provided, then the previous value is removed, and
     * the new value is added to the back of the queue.
     * @param key A key used to locate a value later
     * @param value The value to be put in the queue
     */
    public push(key: K, value: V): void {
      if (this.nodeMap.has(key)) {
        this.delete(key);
      }
      const node = { key, value, prev: this.tail };
      if (this.tail) {
        this.tail.next = node;
      } else {
        this.head = node;
      }
      this.tail = node;
      this.nodeMap.set(key, node);
      this.length++;
    }

    /**
     * Removes the first value from the queue, if there is one.
     */
    public pop(): void {
      if (this.head) {
        const key = this.head.key;
        if (this.tail === this.head) {
          this.head = undefined;
          this.tail = undefined;
        } else {
          this.head = this.head.next;
        }
        this.nodeMap.delete(key);
        this.length--;
      }
    }

    /**
     * Removes a value from the queue.
     * @param key A key used to locate a value in the queue.
     */
    public delete(key: K): boolean {
      const hadKey = this.nodeMap.delete(key);
      if (hadKey) {
        if (this.head?.key === key) {
          this.head = this.head.next;
        }
        if (this.tail?.key === key) {
          this.tail = this.tail.prev;
        }
        this.length--;
      }
      return hadKey;
    }

    /**
     * Returns the value at the head of the queue.
     */
    public front(): V | undefined {
      return this.head?.value;
    }

    /**
     * Returns the value at the tail of the queue.
     */
    public back(): V | undefined {
      return this.tail?.value;
    }

    /**
     * Returns true if a key is already used in the queue, false otherwise.
     * @param key A key used to locate a value in the queue.
     */
    public has(key: K): boolean {
      return this.nodeMap.has(key);
    }
}
