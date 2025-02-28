// Problem: Remove Duplicates from Sorted List II
// Remove all nodes that have duplicate numbers from a sorted linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Removes all nodes that have duplicate numbers from a sorted linked list.
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The head of the modified linked list.
 */
function deleteDuplicates(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current) {
        // Check for duplicates
        if (current.next && current.val === current.next.val) {
            // Skip all nodes with the same value
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            prev.next = current.next; // Skip all duplicates
        } else {
            prev = prev.next; // Move prev if no duplicate
        }
        current = current.next;
    }

    return dummy.next;
}

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
// const result = deleteDuplicates(head);
// // Output: 1 -> 2 -> 5

// Explanation:
// The solution uses a dummy node to handle edge cases and skips all nodes with duplicate values.
// It connects previous distinct nodes to the next distinct node.
