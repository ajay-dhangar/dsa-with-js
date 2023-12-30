# 2. Array and string manipulation

Array and string manipulation is a common task in programming. In this section, we will learn how to manipulate arrays and strings in JavaScript.

## 2.1. Array

Array is a data structure that stores a collection of elements. Each element in an array is associated with at least one index. The index of an element is its position within the array. The first element is at index 0, the second element is at index 1, and so on. The last element is at index n-1, where n is the total number of elements in the array.

### 2.1.1. Array declaration

An array can be declared in two ways:

```js
// 1. Using the Array constructor
const arr1 = new Array(1, 2, 3);

// 2. Using the array literal
const arr2 = [1, 2, 3];
```

### 2.1.2. Array access

An element in an array can be accessed using its index:

```js
const arr = [1, 2, 3];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
```

### 2.1.3. Array length

The length of an array is the number of elements it contains. The length of an array can be accessed using the `length` property:

```js
const arr = [1, 2, 3];

console.log(arr.length); // 3
```

### 2.1.4. Array iteration

An array can be iterated using a `for` loop:

```js
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 2.1.5. Array methods

There are many methods that can be used to manipulate arrays. Some of the most commonly used methods are:

- `push()`: adds one or more elements to the end of an array
- `pop()`: removes the last element from an array
- `shift()`: removes the first element from an array
- `unshift()`: adds one or more elements to the beginning of an array
- `splice()`: adds or removes elements from an array
- `slice()`: returns a copy of a portion of an array
- `concat()`: concatenates two or more arrays
- `join()`: joins all elements of an array into a string
- `indexOf()`: returns the index of the first occurrence of an element in an array
- `lastIndexOf()`: returns the index of the last occurrence of an element in an array
- `includes()`: determines whether an array contains a certain element
- `reverse()`: reverses the order of the elements in an array
- `sort()`: sorts the elements of an array
- `filter()`: creates a new array with all elements that pass the test implemented by a provided function
- `map()`: creates a new array with the results of calling a provided function on every element in the calling array
- `reduce()`: applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
- `forEach()`: executes a provided function once for each array element
- `some()`: tests whether at least one element in the array passes the test implemented by the provided function
- `every()`: tests whether all elements in the array pass the test implemented by the provided function
- `find()`: returns the value of the first element in the array that satisfies the provided testing function
- `findIndex()`: returns the index of the first element in the array that satisfies the provided testing function
- `flat()`: creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
- `flatMap()`: first maps each element using a mapping function, then flattens the result into a new array
- `from()`: creates a new, shallow-copied array instance from an array-like or iterable object
- `isArray()`: determines whether the passed value is an Array
- `of()`: creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
- `toString()`: returns a string representing the specified array and its elements
- `toLocaleString()`: returns a string representing the elements of the array
- `keys()`: returns a new Array Iterator object that contains the keys for each index in the array
- `values()`: returns a new Array Iterator object that contains the values for each index in the array
- `entries()`: returns a new Array Iterator object that contains the key/value pairs for each index in the array
- `copyWithin()`: shallow copies part of an array to another location in the same array and returns it without modifying its length
- `fill()`: fills all the elements of an array from a start index to an end index with a static value
- `includes()`: determines whether an array includes a certain value among its entries, returning true or false as appropriate
- `flat()`: creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
- `flatMap()`: first maps each element using a mapping function, then flattens the result into a new array
- `indexOf()`: returns the first index at which a given element can be found in the array, or -1 if it is not present
- `lastIndexOf()`: returns the last index at which a given element can be found in the array, or -1 if it is not present
- `join()`: joins all elements of an array into a string
- `reverse()`: reverses the order of the elements in an array
- `slice()`: returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
- `sort()`: sorts the elements of an array

---

## 2.2. String

A string is a sequence of characters. A character is a single character. A string can be declared using single quotes, double quotes, or backticks:

```js
const str1 = 'Hello, world!';
const str2 = "My name is Ajay.";

// Backticks are used to declare template literals
const str3 = `The sum of 1 and 2 is ${1 + 2}.`;

console.log(str1); // Hello, world!
console.log(str2); // My name is Ajay.
console.log(str3); // The sum of 1 and 2 is 3.
```

### 2.2.1. String access

A character in a string can be accessed using its index:

```js
const str = 'Hello, world!';
console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[2]); // l
console.log(str[3]); // l
console.log(str[4]); // o
console.log(str[5]); // ,
console.log(str[6]); // ' '
console.log(str[7]); // w
console.log(str[8]); // o
console.log(str[9]); // r
console.log(str[10]); // l
console.log(str[11]); // d
console.log(str[12]); // !
```

### 2.2.2. String length

The length of a string is the number of characters it contains. The length of a string can be accessed using the `length` property:

```js
const str = 'Hello, world!';
console.log(str.length); // 13
```

### 2.2.3. String iteration

A string can be iterated using a `for` loop:

```js
const str = 'Hello, world!';
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

### 2.2.4. String methods

There are many methods that can be used to manipulate strings. Some of the most commonly used methods are:

- `charAt()`: returns the character at the specified index
- `charCodeAt()`: returns the Unicode of the character at the specified index
- `concat()`: concatenates two or more strings
- `endsWith()`: determines whether a string ends with the characters of a specified string
- `includes()`: determines whether a string contains the characters of a specified string
- `indexOf()`: returns the index of the first occurrence of a specified value in a string
- `lastIndexOf()`: returns the index of the last occurrence of a specified value in a string
- `localeCompare()`: returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order
- `match()`: searches a string for a match against a regular expression, and returns the matches
- `repeat()`: returns a new string with a specified number of copies of an existing string
- `replace()`: searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
- `search()`: searches a string for a specified value, or regular expression, and returns the position of the match
- `slice()`: extracts a part of a string and returns a new string
- `split()`: splits a string into an array of substrings
- `startsWith()`: determines whether a string begins with the characters of a specified string
- `substr()`: extracts the characters from a string, beginning at a specified start position, and through the specified number of character
- `substring()`: extracts the characters from a string, between two specified indices
- `toLocaleLowerCase()`: converts a string to lowercase letters, according to the host's current locale
- `toLocaleUpperCase()`: converts a string to uppercase letters, according to the host's current locale
- `toLowerCase()`: converts a string to lowercase letters
- `toString()`: returns the value of a String object
- `toUpperCase()`: converts a string to uppercase letters
- `trim()`: removes whitespace from both ends of a string
- `valueOf()`: returns the primitive value of a String object
- `padEnd()`: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length
- `padStart()`: pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
- `trimEnd()`: removes whitespace from the end of a string
- `trimStart()`: removes whitespace from the beginning of a string
- `fromCharCode()`: returns a string created from the specified sequence of UTF-16 code units
- `fromCodePoint()`: returns a string created by using the specified sequence of code points
- `raw()`: returns the raw string form of a template literal
- `codePointAt()`: returns a non-negative integer that is the Unicode code point value
- `endsWith()`: determines whether a string ends with the characters of a specified string
- `includes()`: determines whether a string contains the characters of a specified string
- `normalize()`: returns the Unicode Normalization Form of the string
- `repeat()`: returns a new string with a specified number of copies of an existing string
- `startsWith()`: determines whether a string begins with the characters of a specified string
- `anchor()`: creates an HTML anchor that is used as a hypertext target
- `big()`: creates a `<big>` HTML element
- `blink()`: creates a `<blink>` HTML element
- `bold()`: creates a `<b>` HTML element
- `fixed()`: creates a `<tt>` HTML element
- `fontcolor()`: creates a `<font>` HTML element
- `fontsize()`: creates a `<font>` HTML element
- `italics()`: creates an `<i>` HTML element
- `link()`: creates an HTML `<a>` element that causes a jump to a given named anchor
- `small()`: creates a `<small>` HTML element
- `strike()`: creates a `<strike>` HTML element
- `sub()`: creates a `<sub>` HTML element
- `sup()`: creates a `<sup>` HTML element
- `trimLeft()`: removes whitespace from the left side of a string
- `trimRight()`: removes whitespace from the right side of a string
- `trimStart()`: removes whitespace from the beginning of a string
- `trimEnd()`: removes whitespace from the end of a string
- `at()`: returns the Unicode value of the character at the specified location
- `padEnd()`: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length
- `padStart()`: pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
- `trimEnd()`: removes whitespace from the end of a string
- `trimStart()`: removes whitespace from the beginning of a string
- `trimRight()`: removes whitespace from the right side of a string
- `trimLeft()`: removes whitespace from the left side of a string
- `matchAll()`: returns an iterator of all results matching a string against a regular expression, including capturing groups
- `replaceAll()`: returns a new string with all matches of a pattern replaced by a replacement

---

## 2.3. Exercises

### 2.3.1. Array

1. Declare an array named `arr1` that contains the following elements: `1`, `2`, `3`, `4`, `5`.
2. Make a copy of `arr1` and store it in a variable named `arr2`.
3. Add the element `6` to the end of `arr2`.
4. Remove the first element from `arr2`.
5. Add the element `0` to the beginning of `arr2`.
6. Remove the last element from `arr2`.
7. Add the elements `7`, `8`, `9` to the end of `arr2`.
8. Remove the elements `7`, `8`, `9` from `arr2`.
9. Add the elements `7`, `8`, `9` to the beginning of `arr2`.
10. Manipulate `arr2` so that it contains the elements `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` in that order.
11. More exercises coming soon...

### 2.3.2. String

1. Declare a string named `str1` that contains the following characters: `H`, `e`, `l`, `l`, `o`, `,`, ` `, `w`, `o`, `r`, `l`, `d`, `!`.
2. Make a copy of `str1` and store it in a variable named `str2`.
3. Add the character `?` to the end of `str2`.
4. Remove the first character from `str2`.
5. Add the character `?` to the beginning of `str2`.
6. Remove the last character from `str2`.
7. Add the characters `?`, `?`, `?` to the end of `str2`.
8. Remove the characters `?`, `?`, `?` from `str2`.
9. Add the characters `?`, `?`, `?` to the beginning of `str2`.
10. Manipulate `str2` so that it contains the characters `H`, `e`, `l`, `l`, `o`, `,`, ` `, `w`, `o`, `r`, `l`, `d`, `!`, `?`, `?`, `?` in that order.
11. More exercises coming soon...

---

## 2.4. References

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


***Thanks for reading ❤***

If you liked this post, share it with all of your programming buddies! and also follow me on [Twitter](https://twitter.com/AJAYDHA27250016) so that you can get the latest updates as soon as they are posted. Give star to this repo. And follow me on [GitHub](https://githunb.com/ajay-dhangar).