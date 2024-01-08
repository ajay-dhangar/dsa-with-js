//
// 1. **Task: Reverse an Array**
// - **Input:** `[1, 2, 3, 4, 5]`
// - **Output:** `[5, 4, 3, 2, 1]`

function reverseArray(arr) {
  return arr.reverse();  
}

// unit tests
// do not modify the below code
test("reverse array", function () {
  const arr = [1, 2, 3, 4, 5];
  reverseArray(arr);
  expect(arr).toEqual([5, 4, 3, 2, 1]);
  expect(reverseArray(arr)).toMatchSnapshot();
});
