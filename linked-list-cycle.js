// Problem: Linked List Cycle
// Determine if a linked list has a cycle in it.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Determines if a linked list has a cycle.
 * @param {ListNode} head - The head of the linked list.
 * @return {boolean} - True if there is a cycle, otherwise false.
 */
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

// Example usage:
// const head = new ListNode(3);
// head.next = new ListNode(2);
// head.next.next = new ListNode(0);
// head.next.next.next = new ListNode(-4);
// head.next.next.next.next = head.next; // Creates a cycle
// console.log(hasCycle(head)); // Output: true

// Explanation:
// The solution uses two pointers moving at different speeds to detect a cycle.
// If they meet, there is a cycle; if the fast pointer reaches the end, there is no cycle.
