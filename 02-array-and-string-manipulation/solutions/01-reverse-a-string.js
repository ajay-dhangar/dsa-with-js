// 1. Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

// Examples 1:
// Input: "hello"
// Output: "olleh"

// Examples 2:
// Input: "Howdy"
// Output: "ydwoH"

const reverseString = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString('hello')); // olleh
console.log(reverseString('ydwoH')); // Howdy

// -----------------------------------------------------------------------------------
// Expected Output: "olleh" and "ydwoH" for the two examples above.
// -----------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
//  Explanation: The for loop starts at the end of the string and iterates backwards.

// 1. Create a variable called reversedStr and set it equal to an empty string.
// 2. Create a for loop that starts at the end of the string and iterates backwards.
// 3. Inside the for loop, add each letter to the reversedStr variable.
// 4. Return reversedStr.
// 5. Call the function with a string as the argument.
// ------------------------------------------------------------------------------------

// Data Structures: Strings, Loops (for) 
// Algorithms: Iteration, Concatenation 
// notation: O(n) Linear Time Complexity
// comlexity: 
//           (1) Space Complexity: O(n) Linear Space Complexity 
//           (2) Time Complexity: O(n) Linear Time Complexity 
// ------------------------------------------------------------------------------------