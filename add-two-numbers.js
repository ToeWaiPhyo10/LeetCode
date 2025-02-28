// Problem: Add Two Numbers
// Add two numbers represented by linked lists and return the sum as a linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Adds two numbers represented by linked lists.
 * @param {ListNode} l1 - The head of the first linked list.
 * @param {ListNode} l2 - The head of the second linked list.
 * @return {ListNode} - The head of the resulting linked list.
 */
function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = (l1 !== null) ? l1.val : 0;
        const y = (l2 !== null) ? l2.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Example usage:
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// const result = addTwoNumbers(l1, l2);
// // Output: 7 -> 0 -> 8

// Explanation:
// The solution iterates through both linked lists, adding corresponding digits and handling carry.
// It constructs the resulting linked list by creating new nodes for each digit of the sum.
