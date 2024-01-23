// 
// Task: Remove Duplicates
// Input: [2, 4, 3, 2, 7, 4, 1]
// Output: [2, 4, 3, 7, 1]

function removeDuplicate(arr) {
    // code goes here
}

// unit tests
// do not modify the below code

test.skip("remove duplicates from an array", function () {
  const arr = [2, 4, 3, 2, 7, 4, 1];
  const result = removeDuplicate(arr);
  expect(result).toEqual([2, 4, 3, 7, 1]);
});