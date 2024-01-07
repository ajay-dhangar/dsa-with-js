class ReverseArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deletedItem = this.data[index];
    this._collapseTo(index);
    return deletedItem;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
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
