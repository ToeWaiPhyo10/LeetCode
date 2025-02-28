// Problem: Partition List
// Partition a linked list around a value x, preserving the original relative order.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Partitions a linked list around a value x.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} x - The partition value.
 * @return {ListNode} - The head of the partitioned linked list.
 */
function partition(head, x) {
    const beforeHead = new ListNode(0);
    const afterHead = new ListNode(0);
    let before = beforeHead;
    let after = afterHead;

    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    after.next = null; // Terminate the after list
    before.next = afterHead.next; // Connect the before list to the after list

    return beforeHead.next;
}

// Example usage:
// const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
// const result = partition(head, 3);
// // Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5

// Explanation:
// The solution uses two separate lists to partition the nodes.
// It connects the lists together to form the final partitioned list.
