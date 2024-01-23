//
// Task: Kadane's Algorithm
// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Subarray [4, -1, 2, 1] has the maximum sum)

function KadaneAlgorithm(arr) {
  let maxArray = -Infinity;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    maxSum = maxSum + arr[i];

    if (maxArray < maxSum) {
      maxArray = maxSum;
    }

    if (maxSum < 0) {
      maxSum = 0;
    }
  }

  return maxArray;
}

// unit tests
// do not modify the below code

test("Kadane's Algorithm", function () {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const result = KadaneAlgorithm(arr);
  console.log(result);
  expect(result).toEqual(6);
});
