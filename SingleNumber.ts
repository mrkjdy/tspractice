const singleNumber = (nums: number[]): number =>
    nums.reduce((res: number, cur: number) => res ^ cur);

let testdata2 = [2,3,10,3,2];
console.log(singleNumber(testdata2));