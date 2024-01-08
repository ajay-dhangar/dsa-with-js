//
// Task: Find the Maximum Element
// Input: [3, 7, 2, 8, 1]
// Output: 8
//

function findMaxElement(arr) {
    const n = arr.length; // get the length of the array
    let maxElement = arr[0];  // set maxElement to the first element in the array
    

    for(let i=1; i<n; i++) {  // loop through the array starting at the second element
        if(arr[i] > maxElement) { // if the current element is greater than maxElement
            maxElement = arr[i]; // set maxElement to the current element
        }
    }
    return maxElement; // return maxElement
  }
  
  // unit tests
  // do not modify the below code
  
  test("find max element", function () {
    const arr = [3, 7, 2, 8, 1];
    expect(findMaxElement(arr)).toEqual(8);
    expect(findMaxElement(arr)).toMatchSnapshot();
  });
  

  

// Explanation:

// The first thing we do is get the length of the array and store it in a variable called n.
// We then set maxElement to the first element in the array.
// We then loop through the array starting at the second element.
// We then check if the current element is greater than maxElement.
// If the current element is greater than maxElement, we set maxElement to the current element.
// We then return maxElement.

// Vitualization:

// If for example we have an array of [3, 7, 2, 8, 1], 
// Then what's happennig our code or logic

// | i | arr[i] | maxElement | condition  |
// |---|--------|------------|------------|
// | 0 | 3      | 3          | 3 > 3 ( F )|
// | 1 | 7      | 7          | 7 > 3 ( T )|    (Note: Where, i represents the index of 
// | 2 | 2      | 7          |  (F)       |      the array, T = True and F = False )
// | 3 | 8      | 8          | 8 > 7 ( T )|
// | 4 | 1      | 8          |  (F)       |

// So the maxElement is 8

// Time Complexity: O(n)
// Space Complexity: O(1)

