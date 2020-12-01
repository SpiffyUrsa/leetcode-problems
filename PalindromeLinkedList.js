var isPalindrome = function(head) {
  let vals = [];
  let reversed;
  let currNode = head;
  while(currNode) {
      vals.push(currNode.val);
      currNode = currNode.next;
  }
  reversed = [...vals].reverse();
  for (let i = 0; i < vals.length; i++) {
      if (vals[i] !== reversed[i]) return false;
  }
  return true;
};