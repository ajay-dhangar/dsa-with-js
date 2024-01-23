// Task: Move Zeros to the End
// Input: [0, 2, 0, 4, 0, 5, 6]
// Output: [2, 4, 5, 6, 0, 0, 0]

function moveZerosToTheEnd(arr) {
  const zeros = [];
  const nonZeros = [];
  const n = arr.length;

  for(let i=0; i<n; i++){
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }

  return [...nonZeros.sort(), ...zeros]
}

// unit tests
// do not modify the below code

test("Move Zeros to the End", function () {
  const arr = [0, 2, 0, 4, 0, 5, 6];
  const result = moveZerosToTheEnd(arr);
  // console.log(result); 
  expect(result).toEqual([2, 4, 5, 6, 0, 0, 0]);
});