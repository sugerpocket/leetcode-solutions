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

import { ListNode } from "./types/ListNode";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  const vals: Array<ListNode['val'] | null> = new Array(lists.length);
  const pointers: Array<ListNode | null> = new Array(lists.length);

  const dummy = new ListNode(-1);
  let pointer = dummy;

  for (let i = 0; i < lists.length; i++) {
    pointers[i] = lists[i];
    vals[i] = typeof pointers[i]?.val == 'number' ? pointers[i]!.val : null;
  }

  while (pointers.some(pointer => pointer !== null)) {
    let min = vals[0];
    let minIdx = 0;
    for (let i = 1; i < vals.length; i++) {
      if (min == null) {
        min = vals[i];
        minIdx = i;
        continue;
      }
      const val = vals[i];
      if (val !== null && val < min) {
        min = val;
        minIdx = i;
      }
    }

    if (min !== null) {
      pointer.next = pointers[minIdx]!;
      pointer = pointer.next;
      const next = pointer.next;
      pointers[minIdx] = next;
      vals[minIdx] = typeof next?.val == 'number' ? next!.val : null;
    }
  }

  return dummy.next;
};
