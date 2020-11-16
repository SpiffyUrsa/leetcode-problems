var addTwoNumbers = function(l1, l2) {
  let resHead = new ListNode();
  let currResNode = resHead;
  function addNodes(node1, node2, carry = 0) {
     if (!node1 && !node2 && carry === 0) return;
      let node1Val = node1 ? node1.val : 0;
      let node2Val = node2 ? node2.val : 0;
      let nodeSum = node1Val + node2Val + carry;
      if (nodeSum > 9) {
          carry = Math.floor(nodeSum / 10);
          nodeSum = nodeSum % 10;
      } else {
          carry = 0;
      }
      currResNode.val += nodeSum;
      let node1Next = node1 ? node1.next : null;
      let node2Next = node2 ? node2.next : null
      if (node1Next || node2Next || carry > 0) currResNode.next = new ListNode();
      currResNode = currResNode.next;
      node1 = node1 ? node1.next : null;
      node2 = node2 ? node2.next : null;
      addNodes(node1, node2, carry);
  }
  addNodes(l1, l2);
  return resHead;
};
