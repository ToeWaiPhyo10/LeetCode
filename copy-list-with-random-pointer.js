// Problem: Copy List with Random Pointer
// Create a deep copy of a linked list with an additional random pointer.

/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *     this.val = val;
 *     this.next = next;
 *     this.random = random;
 * }
 */

/**
 * Creates a deep copy of a linked list with random pointers.
 * @param {Node} head - The head of the linked list.
 * @return {Node} - The head of the copied linked list.
 */
function copyRandomList(head) {
    if (!head) return null;

    const map = new Map();
    let current = head;

    // First pass: Create a copy of each node and store it in the map
    while (current) {
        map.set(current, new Node(current.val, null, null));
        current = current.next;
    }

    current = head;

    // Second pass: Assign next and random pointers
    while (current) {
        const copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
}

// Example usage:
// const head = new Node(7, null, null);
// head.next = new Node(13, null, head);
// head.next.next = new Node(11, null, null);
// head.next.next.next = new Node(10, null, head.next.next);
// head.next.next.next.next = new Node(1, null, head);
// const copiedList = copyRandomList(head);

// Explanation:
// The solution uses a hash map to store the mapping from original nodes to copied nodes.
// It ensures that each node's next and random pointers are correctly assigned in the copied list.
