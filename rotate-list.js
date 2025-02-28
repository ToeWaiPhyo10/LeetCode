// Problem: Rotate List
// Rotate a linked list to the right by k places.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Rotates a linked list to the right by k places.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} k - The number of places to rotate.
 * @return {ListNode} - The head of the rotated linked list.
 */
function rotateRight(head, k) {
    if (!head || k === 0) return head;

    // Determine the length of the list
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Connect the tail to the head to form a circular list
    tail.next = head;

    // Find the new head after rotation
    let stepsToNewHead = length - (k % length);
    let newTail = tail;
    while (stepsToNewHead > 0) {
        newTail = newTail.next;
        stepsToNewHead--;
    }

    const newHead = newTail.next;
    newTail.next = null; // Break the circular connection

    return newHead;
}

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const result = rotateRight(head, 2);
// // Output: 4 -> 5 -> 1 -> 2 -> 3

// Explanation:
// The solution determines the length of the list and forms a circular list.
// It then finds the new head by moving steps and breaks the circular connection.
