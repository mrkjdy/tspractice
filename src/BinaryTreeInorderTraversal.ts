import { MTreeNode } from './MergeTwoBinaryTrees';

export const inorderTraversal = (root: MTreeNode): number[] => {
  const inorder = Array<number>();
  const stack = Array<MTreeNode>();
  stack.push(root);
  while (stack.length > 0) {
    const last = stack[stack.length - 1];
    if (last && last?.left) {
      stack.push(last?.left);
      last.left = undefined;
      continue;
    }
    const cur = stack.pop();
    if (!cur) {
      break;
    }
    inorder.push(cur.val);
    if (cur?.right) {
      stack.push(cur?.right);
    }
  }
  return inorder;
};
