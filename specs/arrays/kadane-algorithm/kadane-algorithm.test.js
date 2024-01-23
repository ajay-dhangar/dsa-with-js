// 
// Task: Kadane's Algorithm
// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Subarray [4, -1, 2, 1] has the maximum sum)

function KadaneAlgorithm(arr) {
    // code goes here
}

// unit tests
// do not modify the below code

test.skip("Kadane's Algorithm", function () {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const result = KadaneAlgorithm(arr);
  expect(result).toEqual(6);
});