/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from './types/ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(-1, head);
  let end: ListNode | null = dummy;
  let length = 0;
  while (end !== null && length <= n) {
    length++;
    end = end.next;
  }

  let start: ListNode | null = dummy;
  while (end !== null) {
    start = start!.next;
    end = end.next;
  }

  start!.next = start!.next!.next;

  return dummy.next;
};

function main() {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const result = removeNthFromEnd(head, 2);
  console.log(result);
  debugger;
}

main();