var partition = function(head, x) {
  let lowerHead = new ListNode();
  let upperHead = new ListNode();
  let currLower = lowerHead;
  let currUpper = upperHead;
  let currNode = head;
  while (currNode) {
      if (currNode.val >= x) {
          currUpper.next = new ListNode(currNode.val);
          currUpper = currUpper.next;
      } else {
          currLower.next = new ListNode(currNode.val);
          currLower = currLower.next;
      }
      currNode = currNode.next;
  }
  currLower.next = upperHead.next;
  return lowerHead.next;
};