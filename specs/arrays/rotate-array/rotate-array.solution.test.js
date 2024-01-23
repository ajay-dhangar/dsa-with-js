//
// Task: Rotate an Array
//
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

function rotateArray(nums, target) {
    const n = nums.length;
    const k = target % n;
    const result = [];
    for(let i=0; i<n; i++) {
        result[(i+k)%n] = nums[i]; 
        // (0+2)%5 = 2 => result[2] = nums[0] = 1 => result = [0, 0, 1, 0, 0]
        // (1+2)%5 = 3 => result[3] = nums[1] = 2 => result = [0, 0, 1, 2, 0]
        // (2+2)%5 = 4 => result[4] = nums[2] = 3 => result = [0, 0, 1, 2, 3]
        // (3+2)%5 = 0 => result[0] = nums[3] = 4 => result = [4, 0, 1, 2, 3]
        // (4+2)%5 = 1 => result[1] = nums[4] = 5 => result = [4, 5, 1, 2, 3]
    }
    return result;
  }
  
  // unit tests
  // do not modify the below code
  
  test("rotate array to the right k times", function () {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    const result = rotateArray(arr, k);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
  

// Vitualization of the solution:

// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

// i = 0 => (0+2)%5 = 2 => result[2] = nums[0] = 1 => result = [0, 0, 1, 0, 0]
// i = 1 => (1+2)%5 = 3 => result[3] = nums[1] = 2 => result = [0, 0, 1, 2, 0]
// i = 2 => (2+2)%5 = 4 => result[4] = nums[2] = 3 => result = [0, 0, 1, 2, 3]
// i = 3 => (3+2)%5 = 0 => result[0] = nums[3] = 4 => result = [4, 0, 1, 2, 3]
// i = 4 => (4+2)%5 = 1 => result[1] = nums[4] = 5 => result = [4, 5, 1, 2, 3]

// result = [4, 5, 1, 2, 3]

// Time Complexity: O(n)
// Space Complexity: O(n)

