// Dynamic problem
// Build up solution

// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

// n    ans array
// 2    1   [1, 100]
// 3    2   [1, 100, 1]
// 4    2   [1, 100, 1, 1]
// 5    3   [1, 100, 1, 1, 1]
// 10   6   [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
//           1  100  2  3  3  103  4  5  104  6

// Keep a min cost for each position
// easy

const minCostClimbingStairs = (nums: number[]): number => {
  const lastTwo = [nums[0],nums[1]];
  for (let i = 2; i < nums.length; i++) {
    lastTwo[i%2] = nums[i] + Math.min(...lastTwo);
  }
  return Math.min(...lastTwo);
};

const ex2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(ex2));
