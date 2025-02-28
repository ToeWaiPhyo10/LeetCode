// Problem: Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new sorted list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Merges two sorted linked lists.
 * @param {ListNode} l1 - The head of the first sorted linked list.
 * @param {ListNode} l2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummyHead.next;
}

// Example usage:
// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const result = mergeTwoLists(l1, l2);
// // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Explanation:
// The solution iterates through both linked lists, comparing nodes and linking the smaller one to the result list.
// It continues until one list is exhausted, then appends the remaining nodes of the other list.
