# Complexity Analysis of Algorithms and Problems 

## what is complexity analysis?
- Complexity analysis is a way to classify the algorithm based on how its running time or space grows as the input size grows.
- It is also called as **Asymptotic analysis** as the input size grows towards infinity.
- It is used to compare the efficiency of different approaches to a problem.
- It is used to determine which algorithm is efficient for a given scenario.
- It is used to determine the scalability of an algorithm.
- It is used to determine the time and space complexity of an algorithm.
- It is used to determine the best, average and worst case scenario of an algorithm.

## How many types of complexity analysis are there?

There are two types of complexity analysis:

1. **Time complexity analysis:** It is a way to represent the amount of time required by the algorithm to run as the input size grows. It is denoted by the big O notation. It is also called as **Asymptotic time complexity**. It is used to determine the best, average and worst case scenario of an algorithm. It is used to determine the scalability of an algorithm. 

***for example:*** 

```js
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

In the above example, the time complexity of the algorithm is O(n) because the number of operations performed by the algorithm is directly proportional to the input size.

2. **Space complexity analysis:** It is a way to represent the amount of space or memory required by the algorithm to run as the input size grows. It is denoted by the big O notation. It is also called as **Asymptotic space complexity**. It is used to determine the best, average and worst case scenario of an algorithm. It is used to determine the scalability of an algorithm.

***for example:*** 

```js
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

In the above example, the space complexity of the algorithm is O(1) because the amount of memory required by the algorithm is constant and does not depend on the input size.

## How to calculate the time complexity of an algorithm?

The time complexity of an algorithm is calculated by counting the number of operations performed by the algorithm as the input size grows towards infinity.

***for example:*** 

```js
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

In the above example, the number of operations performed by the algorithm is directly proportional to the input size. So, the time complexity of the algorithm is O(n).

> **Note:** The time complexity of an algorithm is always represented by the worst case scenario.
> Theory of time complexity analysis is based on the following two assumptions:
> 1. The time required to perform a single operation is constant.
> 2. The time required to perform a single operation is independent of the input size.
>
> ***for example:***
>
> ```js
> function sumOfN(n) {
>     let sum = 0;
>     for (let i = 1; i <= n; i++) {
>         sum += i;
>     }
>     return sum;
> }
> ```
>
> In the above example, the time required to perform a single operation is constant and independent of the input size. So, the time complexity of the algorithm is O(n).

## How to calculate the space complexity of an algorithm?

The space complexity of an algorithm is calculated by counting the amount of memory required by the algorithm as the input size grows towards infinity.

***for example:*** 

```js
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

In the above example, the amount of memory required by the algorithm is constant and does not depend on the input size. So, the space complexity of the algorithm is O(1).

> **Note:** The space complexity of an algorithm is always represented by the worst case scenario.
> Theory of space complexity analysis is based on the following two assumptions:
> 1. The space required to store a single variable is constant.
> 2. The space required to store a single variable is independent of the input size.
>
> ***for example:***
>
> ```js
> function sumOfN(n) {
>     let sum = 0;
>     for (let i = 1; i <= n; i++) {
>         sum += i;
>     }
>     return sum;
> }
> ```
>
> In the above example, the space required to store a single variable is constant (for example: `sum`). So, the space complexity of the algorithm is O(1).

## What is the difference between time complexity and space complexity?

| Time Complexity | Space Complexity |
| --- | --- |
| It is a way to represent the amount of time required by the algorithm to run as the input size grows. | It is a way to represent the amount of space or memory required by the algorithm to run as the input size grows. |
| It is denoted by the big O notation. | It is denoted by the big O notation. |
| It is also called as **Asymptotic time complexity**. | It is also called as **Asymptotic space complexity**. |
| It is used to determine the best, average and worst case scenario of an algorithm. | It is used to determine the best, average and worst case scenario of an algorithm. |
| It is used to determine the scalability of an algorithm. | It is used to determine the scalability of an algorithm. |
| It is used to determine the time complexity of an algorithm. | It is used to determine the space complexity of an algorithm. |

