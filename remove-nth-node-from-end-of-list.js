// Problem: Remove Nth Node From End of List
// Remove the nth node from the end of a linked list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Removes the nth node from the end of a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end to remove.
 * @return {ListNode} - The head of the modified linked list.
 */
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Move first n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end
    second.next = second.next.next;

    return dummy.next;
}

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const result = removeNthFromEnd(head, 2);
// // Output: 1 -> 2 -> 3 -> 5

// Explanation:
// The solution uses two pointers to maintain a gap of n nodes.
// It removes the nth node from the end by adjusting the pointers.
