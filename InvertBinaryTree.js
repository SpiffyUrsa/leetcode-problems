var invertTree = function(root) {
  if (!root) return null;
  let visitStack = [root];
  while (visitStack.length) {
      let currNode = visitStack.pop();
      [currNode.left, currNode.right] = [currNode.right, currNode.left];
      if (currNode.left) visitStack.push(currNode.left);
      if (currNode.right) visitStack.push(currNode.right);
  }
  return root;
};