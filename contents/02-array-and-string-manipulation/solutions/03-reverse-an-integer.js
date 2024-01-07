// ====================================
//  3. Reverse an Integer
// ====================================

// Write a program that reverses an integer.
// The program should work for both positive and negative numbers.
//
// Examples 1:
// Input: 1234
// Output: 4321

// Examples 2:
// Input: -1200
// Output: -21

// Examples 3:
// Input: 0
// Output: 0

const reverseInteger = (num) => {
    let reversedNum = '';
    let numStr = num.toString();
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedNum += numStr[i];
    }
    return parseInt(reversedNum) * Math.sign(num);
}

console.log(reverseInteger(1234)); // 4321
console.log(reverseInteger(-1200)); // -21
console.log(reverseInteger(0)); // 0

// -----------------------------------------------------------------------------------
// Expected Output: 4321, -21, 0 for the three  examples above.
// -----------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

// Explanation:

// 1. Create a variable called reversedNum and set it equal to an empty string.
// 2. Create a variable called numStr and set it equal to num.toString().
// 3. Create a for loop that starts at the end of the string and iterates backwards.
// 4. Inside the for loop, add each letter to the reversedNum variable.
// 5. Return parseInt(reversedNum) * Math.sign(num).
// 6. Call the function with a number as the argument.

// ------------------------------------------------------------------------------------

// Data Structures: Strings, Loops (for)
// Algorithms: Iteration, Concatenation
// notation: O(n) Linear Time Complexity
// comlexity:
//           (1) Space Complexity: O(n) Linear Space Complexity
//           (2) Time Complexity: O(n) Linear Time Complexity

// ------------------------------------------------------------------------------------

