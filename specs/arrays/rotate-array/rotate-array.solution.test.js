//
// Task: Rotate an Array
//
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

function rotateArray(nums, target) {
    // code goes here
  }
  
  // unit tests
  // do not modify the below code
  
  test("rotate array to the right k times", function () {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    const result = rotateArray(arr, k);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
  