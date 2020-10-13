// A Node to use in a Singly Linked List
type SLLNode<T> = {
    val: T;
    next: SLLNode<T>;
} | undefined;

export const deleteNode = (node: SLLNode<number>): void => {
  if (!node || !node.next) {
    return;
  }
  // Just delete the next node
  node.val = node.next.val;
  node.next = node.next.next;
};
