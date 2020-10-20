interface TreeNode {
    val: number;
    left?: TreeNode;
    right?: TreeNode;
}

export type MTreeNode = TreeNode | undefined;

export const mergeTrees = (t1: MTreeNode, t2: MTreeNode): MTreeNode => {
  if (!t1 || !t2) {
    return t1 || t2;
  }

  const stack = Array<[MTreeNode, MTreeNode]>();
  stack.push([t1, t2]);
  while (stack.length > 0) {
    const pair = stack.pop();
    if (!pair) {
      break;
    }
    if (!pair[0] || !pair[1]) {
      continue;
    }
    pair[0].val += pair[1].val;
    if (!pair[0].left) {
      pair[0].left = pair[1].left;
    } else {
      stack.push([pair[0].left, pair[1].left]);
    }
    if (!pair[0].right) {
      pair[0].right = pair[1].right;
    } else {
      stack.push([pair[0].right, pair[1].right]);
    }
  }
  return t1;
};

type MaybeTreeNode = {
    val: number;
    left: MaybeTreeNode;
    right: MaybeTreeNode;
} | undefined;

export const mergeTrees2 = (t1: MaybeTreeNode, t2: MaybeTreeNode): MaybeTreeNode => {
  if (!t1 || !t2) {
    return t1 ?? t2;
  }
  const stack = Array<[MaybeTreeNode, MaybeTreeNode]>();
  stack.push([t1, t2]);
  for (let pair = stack.pop(); pair !== undefined; pair = stack.pop()) {
    if (!pair[0] || !pair[1]) {
      continue;
    }
    pair[0].val += pair[1].val;
    if (pair[0].left) {
      stack.push([pair[0].left, pair[1].left]);
    } else {
      pair[0].left = pair[1].left;
    }
    if (pair[0].right) {
      stack.push([pair[0].right, pair[1].right]);
    } else {
      pair[0].right = pair[1].right;
    }
  }
  return t1;
};
