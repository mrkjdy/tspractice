export const reverseString = (s: number[]): void => {
  let l = 0, r = s.length - 1;
  while (l < r) {
    const tempLeft = s[l];
    s[l] = s[r];
    s[r] = tempLeft;
    l++;
    r--;
  }
};

const testdata = [1, 2, 3, 4, 5];
console.log(testdata);
reverseString(testdata);
console.log(testdata);
