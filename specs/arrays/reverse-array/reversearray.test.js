//
// 1. **Task: Reverse an Array**
// - **Input:** `[1, 2, 3, 4, 5]`
// - **Output:** `[5, 4, 3, 2, 1]`

class ReverseArray {
  // code goes here
}

// unit tests
describe("ReverseArray", function () {
  let reverseArray;

  beforeEach(() => {
    reverseArray = new ReverseArray();
  });

  test("constructor", () => {
    expect(reverseArray).toEqual(expect.any(ReverseArray));
  });

  test("push", () => {
    reverseArray.push("a");
    reverseArray.push("b");
    expect(reverseArray.length).toEqual(2);
  });

  test("pop", () => {
    reverseArray.push("a");
    reverseArray.push("b");
    expect(reverseArray.pop()).toEqual("b");
    expect(reverseArray.length).toEqual(1);
  });

  test("get", () => {
    reverseArray.push("first");
    expect(reverseArray.get(0)).toEqual("first");
  });

  test("delete", () => {
    reverseArray.push("a");
    reverseArray.push("b");
    reverseArray.push("c");
    reverseArray.delete(1);
    expect(reverseArray.length).toEqual(2);
    expect(reverseArray.get(1)).toEqual("c");
  });
});
