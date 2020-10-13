import { MTreeNode } from './MergeTwoBinaryTrees';

export const maxDepth = (root: MTreeNode): number => {
  if (!root) {
    return 0;
  }
  const stack = Array<[number,MTreeNode]>();
  stack.push([1,root]);
  let max = 0;
  while (stack.length > 0) {
    const depth_node = stack.pop();
    if (depth_node === undefined) {
      break;
    }
    max = Math.max(depth_node[0], max);
    if (depth_node[1]?.left) {
      stack.push([depth_node[0] + 1, depth_node[1].left]);
    }
    if (depth_node[1]?.right) {
      stack.push([depth_node[0] + 1, depth_node[1].right]);
    }
  }
  return max;
};
