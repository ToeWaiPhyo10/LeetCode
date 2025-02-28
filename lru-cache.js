// Problem: LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this._remove(node);
            this._add(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }
        const newNode = new ListNode(key, value);
        this._add(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.capacity) {
            const lru = this.head.next;
            this._remove(lru);
            this.map.delete(lru.key);
        }
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _add(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }
}

// Example usage:
// const lruCache = new LRUCache(2);
// lruCache.put(1, 1);
// lruCache.put(2, 2);
// console.log(lruCache.get(1)); // Output: 1
// lruCache.put(3, 3); // Evicts key 2
// console.log(lruCache.get(2)); // Output: -1
// lruCache.put(4, 4); // Evicts key 1
// console.log(lruCache.get(1)); // Output: -1
// console.log(lruCache.get(3)); // Output: 3
// console.log(lruCache.get(4)); // Output: 4

// Explanation:
// The solution uses a hash map for fast access and a doubly linked list to maintain the order of usage.
