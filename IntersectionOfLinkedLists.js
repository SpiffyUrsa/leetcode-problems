var getIntersectionNode = function(headA, headB) {
  let aVisitedSet = new Set();
  while (headA) {
      aVisitedSet.add(headA);
      headA = headA.next;
  }
  while (headB) {
      if (aVisitedSet.has(headB)) return headB;
      headB = headB.next;
  }
  return null;
};