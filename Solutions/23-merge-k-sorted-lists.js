/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

const mergeKLists = (lists) => {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    
    const mid = Math.floor(lists.length / 2);
    const leftLists = lists.slice(0, mid);
    const rightLists = lists.slice(mid);
    
    const mergedLeft = mergeKLists(leftLists);
    const mergedRight = mergeKLists(rightLists);
    
    return mergeTwoLists(mergedLeft, mergedRight);
};