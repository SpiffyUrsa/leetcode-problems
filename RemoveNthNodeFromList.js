var removeNthFromEnd = function(head, n) {
  if (!head) return null;
  let p1 = head;
  let prev = null;
  let p2 = head;
  for (let i = 1; i < n; i++) {
      if (p2 === null) return null;
      p2 = p2.next;
  }
  while (p2 && p2.next !== null) {
      prev = p1;
      p1 = p1.next;
      p2 = p2.next;
  }
  if (prev !== null) {
      prev.next = p1.next;
  } else {
      head = p1.next;
  }
  return head;
};