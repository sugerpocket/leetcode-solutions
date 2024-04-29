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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let target = new ListNode();
  let pointer = target;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }

    pointer = pointer.next;
  }
  
  if (list1 === null) {
    pointer.next = list2;
  } else if (list2 === null) {
    pointer.next = list1
  }

  return target.next;
};
