// Given an integer n, returns an array of all combinations of n pairs of well
// formed parentheses.
const generateParenthesisBugged = (n: number): string[] => {
  const gp = new Array<Array<string>>(n + 1);
  gp.fill(new Array<string>());
  gp[0] = [''];
  gp[1] = ['()'];

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      for (const fhalf of gp[i-j]) {
        for (const bhalf of gp[j-1]) {
          gp[i].push(`(${fhalf})${bhalf}`);
        }
      }
    }
  }

  return gp[n];
};

console.log(generateParenthesisBugged(3));
