// Problem: Reverse Nodes in k-Group
// Reverse the nodes of a linked list k at a time and return its modified list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Reverses the nodes of a linked list k at a time.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} k - The size of the groups to reverse.
 * @return {ListNode} - The head of the modified linked list.
 */
function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (true) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = prevGroupEnd;

        // Check if there are k nodes to reverse
        for (let i = 0; i < k; i++) {
            groupEnd = groupEnd.next;
            if (!groupEnd) return dummy.next;
        }

        const nextGroupStart = groupEnd.next;
        reverse(groupStart, groupEnd);

        prevGroupEnd.next = groupEnd;
        groupStart.next = nextGroupStart;
        prevGroupEnd = groupStart;
    }
}

/**
 * Reverses a sublist of the linked list.
 * @param {ListNode} start - The start node of the sublist.
 * @param {ListNode} end - The end node of the sublist.
 */
function reverse(start, end) {
    let prev = null;
    let current = start;
    const stop = end.next;

    while (current !== stop) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
}

// Example usage:
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const result = reverseKGroup(head, 2);
// // Output: 2 -> 1 -> 4 -> 3 -> 5

// Explanation:
// The solution identifies groups of k nodes and reverses them in place.
// It connects the reversed groups back to the main list.
