// Problem: Reverse Linked List II
// Reverse a portion of a linked list from position m to n.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Reverses a portion of a linked list from position m to n.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} m - The starting position.
 * @param {number} n - The ending position.
 * @return {ListNode} - The head of the modified linked list.
 */
function reverseBetween(head, m, n) {
    if (!head || m === n) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move prev to the node before the mth node
    for (let i = 1; i < m; i++) {
        prev = prev.next;
    }

    const start = prev.next;
    let then = start.next;

    // Reverse the sublist from m to n
    for (let i = 0; i < n - m; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
}

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const result = reverseBetween(head, 2, 4);
// // Output: 1 -> 4 -> 3 -> 2 -> 5

// Explanation:
// The solution uses a dummy node to simplify edge cases and reverses the sublist in place.
// It connects the reversed sublist back to the original list.
