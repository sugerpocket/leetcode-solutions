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

function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy1 = new ListNode(-1);
  const dummy2 = new ListNode(-1);

  let pointer1 = dummy1;
  let pointer2 = dummy2;

  while (head !== null) {
    if (head.val < x) {
      pointer1.next = head;
      pointer1 = pointer1.next;
    } else {
      pointer2.next = head;
      pointer2 = pointer2.next;
    }

    head = head.next;
  }

  pointer1.next = dummy2.next;
  pointer2.next = null;

  return dummy1.next;
};
