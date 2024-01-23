//
// Task: Product of Array Except Self
//  Input: [1, 2, 3, 4]
//  Output: [24, 12, 8, 6]


function ProductOfArrayExceptSelf(nums) {
    const n = nums.length;
    const result = [];
    let product = 1;
    for(let i=0; i<n; i++){
      result[i] = product; // 1, 1, 2, 6 => [1, 1, 2, 6] => [1, 2, 6, 24]
      product *= nums[i];  // 1, 2, 6, 24 => [1, 2, 6, 24] => [1, 2, 6, 24]
    }
    product = 1;
    for(let i=n-1; i>=0; i--){
      result[i] *= product; // 24, 12, 8, 6
      product *= nums[i];  // 24, 12, 4, 1
    }
    return result;
  }
  
  // unit tests
  // do not modify the below code
  test("Product of Array Except Self", function () {
    const nums = [1, 2, 3, 4];
    const result = ProductOfArrayExceptSelf(nums);
    console.log(result);
    expect(result).toEqual([24, 12, 8, 6]);
  });
  