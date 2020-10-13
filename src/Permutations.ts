export const permute = (nums: number[]): number[][] => {
  const permutations = Array<number[]>();
  const generate = (k: number, ns: number[]): void => {
    if (k === 1) {
      permutations.push(ns);
      return;
    }
    generate(k - 1, ns);
    for (let i = 0; i < k - 1; i++) {
      const temp = ns[k-1];
      if (k & 1) {
        ns[k-1] = ns[0];
        ns[0] = temp;
      } else {
        ns[k-1] = ns[i];
        ns[i] = temp;
      }
      generate(k - 1, ns);
    }
  };
  generate(nums.length, nums);
  return permutations;
};
