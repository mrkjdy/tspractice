// This is a dp problem
// 0    ""          gp0
// 1    "()"        gp1
// 2    "(())"      (gp[1][0])gp[0][0]
//      "()()"      (gp[0][0])gp[1][0]
// 3    "((()))"    (gp[2][0])gp[0][0]
//      "(()())"    (gp[2][1])gp[0][0]
//      "(())()"    (gp[1][0])gp[1][0]
//      "()(())"    (gp[0][0])gp[2][0]
//      "()()()"    (gp[0][0])gp[2][1]

// Start with an array of gp results containing n = 0 and n = 1
// Current solution set is:
//  "(" + gp[n-1] + ")" + gp[0]
//  "(" + gp[n-2] + ")" + gp[1]
//  ...
//  "(" + gp[0] + ")" + gp[n-1]

// gp[n-j] may contain multiple strings
// make a temporary set array of results for the first part "(" + gp[n-j] ")"
// then for each one of those append the the solutions to the second half

// Given an integer n, returns an array of all combinations of n pairs of well
// formed parentheses.
const generateParenthesis = (n: number): string[] => {
    const gp = new Array<Array<string>>(n + 1);
    gp[0] = [""];
    gp[1] = ["()"];
    
    for (let i = 2; i <= n; i++) {
        gp[i] = new Array<string>();
        for (let j = 1; j <= i; j++)
            for (const fhalf of gp[i-j])
                for (const bhalf of gp[j-1])
                    gp[i].push(`(${fhalf})${bhalf}`);
    }

    return gp[n];
}

console.log(generateParenthesis(3));