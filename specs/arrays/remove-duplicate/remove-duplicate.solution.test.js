// Task: Remove Duplicates
// Input: [2, 4, 3, 2, 7, 4, 1]
// Output: [2, 4, 3, 7, 1]


// used set to remove duplicates

function removeDuplicate(arr) {
    const result = [];
    const set = new Set();
    for(let i=0; i<arr.length; i++) {
        if(!set.has(arr[i])) {
            result.push(arr[i]);
            set.add(arr[i]);
        }
    }
    return result;
}

// unit tests
// do not modify the below code

test("remove duplicates from an array", function () {
  const arr = [2, 4, 3, 2, 7, 4, 1];
  const result = removeDuplicate(arr);
  expect(result).toEqual([2, 4, 3, 7, 1]);
});

// vitualize the code:

// arr = [2, 4, 3, 2, 7, 4, 1]
// result = [] 
// set = {}
// i = 0  result = [2] set = {2} 
// i = 1  result = [2, 4] set = {2, 4}
// i = 2  result = [2, 4, 3] set = {2, 4, 3}
// i = 3  result = [2, 4, 3] set = {2, 4, 3}  // 2 is already in the set
// i = 4  result = [2, 4, 3, 7] set = {2, 4, 3, 7}
// i = 5  result = [2, 4, 3, 7] set = {2, 4, 3, 7} // 4 is already in the set
// i = 6  result = [2, 4, 3, 7, 1] set = {2, 4, 3, 7, 1}

// result = [2, 4, 3, 7, 1]