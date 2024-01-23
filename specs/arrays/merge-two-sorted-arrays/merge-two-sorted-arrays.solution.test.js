// Task: Merge Two Sorted Arrays
// Input:  [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

function mergeTwoSortedArrays(arr1, arr2) {   
    return [...arr1, ...arr2].sort();
}

// unit tests
// do not modify the below code

test("Merge Two Sorted Arrays", function () {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const result = mergeTwoSortedArrays(arr1, arr2);
  console.log(result);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});