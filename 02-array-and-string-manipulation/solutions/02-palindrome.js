// ===========================
//  2. Palindrome
// ===========================

// -----------------------------------------------------------------------------------
// Write a program that checks if a string is a palindrome. 
// A palindrome is a string that is the same forwards and backwards.

// Examples 1:
// Input: "racecar"
// Output: true

// Examples 2:
// Input: "hello"
// Output: false

// Examples 3:
// Input: "Howdy"
// Output: false

// -----------------------------------------------------------------------------------

const isPalindrome = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr === str;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Howdy')); // false

// -----------------------------------------------------------------------------------
// Expected Output: true, false, false for the three  examples above.
// -----------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

// Explanation:

// 1. Create a variable called reversedStr and set it equal to an empty string.
// 2. Create a for loop that starts at the end of the string and iterates backwards.
// 3. Inside the for loop, add each letter to the reversedStr variable.
// 4. Return reversedStr === str.
// 5. Call the function with a string as the argument.

// ------------------------------------------------------------------------------------

// Data Structures: Strings, Loops (for)
// Algorithms: Iteration, Concatenation
// notation: O(n) Linear Time Complexity
// comlexity:
//           (1) Space Complexity: O(n) Linear Space Complexity
//           (2) Time Complexity: O(n) Linear Time Complexity

// ------------------------------------------------------------------------------------