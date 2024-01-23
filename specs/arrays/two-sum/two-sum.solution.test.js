// 
// Task: Two Sum
// Input: [2, 7, 11, 15], 9
// Output: [0, 1]

function twoSum(nums, target) {
    const n = nums.length;
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }   
    return []; 
  }
  
  // unit tests
  // do not modify the below code
  
  test("two sum", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });