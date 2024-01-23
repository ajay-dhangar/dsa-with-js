// Task: Move Zeros to the End
// Input: [0, 2, 0, 4, 0, 5, 6]
// Output: [2, 4, 5, 6, 0, 0, 0]

function moveZerosToTheEnd(arr) {
    // code goes here
}

// unit tests
// do not modify the below code

test.skip("Move Zeros to the End", function () {
  const arr = [0, 2, 0, 4, 0, 5, 6];
  const result = moveZerosToTheEnd(arr);
  expect(result).toEqual([2, 4, 5, 6, 0, 0, 0]);
});