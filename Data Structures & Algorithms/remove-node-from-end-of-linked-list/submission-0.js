/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
        let curr = head;
        while (curr) {
            len++;
            curr = curr.next
        }

        const removeIdx = len - n;

        if (removeIdx === 0) {
            let tmp = head;
            head = head.next;
            tmp.next = null;
        } else {
            let curr = head;
            let count = 1;
            while (count < removeIdx) {
                curr = curr.next;
                count++;
            }

            let prev = curr;
            let delNode = curr.next;
            prev.next = curr.next.next;
            delNode.next = null;
        }

        return head;
    }
}
