# Data Structures

Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently. They define the relationship between the data, and the operations that can be performed on the data.

## What are the different types of data structures?

There are many different types of data structures. The most common are:

- **Array :** - A collection of elements identified by index or key. The elements are stored in contiguous memory locations. The size of the array is fixed at compile time.
- **Linked List :** - A collection of elements called nodes. Each node has a value and a pointer to the next node in the list. The size of the linked list is dynamic.
- **Stack :** - A collection of elements with two main operations: push, which adds an element to the top of the stack, and pop, which removes the most recently added element from the stack.
- **Queue :** - A collection of elements with two main operations: enqueue, which adds an element to the back of the queue, and dequeue, which removes the element at the front of the queue.
- **Hash Table :** - A collection of elements that are accessed via a key. Each element is stored at a position in the hash table that is determined by the hash function.
- **Tree :** - A collection of elements called nodes. Each node has a value and a list of references to the nodes children. The top node is called the root node.
- **Binary Tree :** - A tree in which each node has at most two children.
- **Binary Search Tree :** - A binary tree in which the value of the left child is less than or equal to the value of the parent node, and the value of the right child is greater than or equal to the value of the parent node.
- **Heap :** - A tree in which each node has a value greater than or equal to the value of its children.
- **Graph :** - A collection of elements called nodes. Each node has a value and a list of references to the nodes neighbours.
- **Directed Graph :** - A graph in which the edges have a direction.
- **Undirected Graph :** - A graph in which the edges do not have a direction.
- **Weighted Graph :** - A graph in which each edge has a weight.
- **Directed Acyclic Graph :** - A directed graph with no cycles.
- **Trie :** - A tree in which each node represents a common prefix of its children.
- **Bloom Filter :** - A probabilistic data structure that tests whether an element is a member of a set.
- **B-Tree :** - A tree in which each node has more than two children.
- **Red-Black Tree :** - A binary search tree in which each node has a colour attribute. The colour of the node is either red or black. The root node is always black. The children of a red node are always black. Every path from the root node to a leaf node contains the same number of black nodes.
- **Splay Tree :** - A binary search tree in which recently accessed elements are quick to access again.
- **AVL Tree :** - A binary search tree in which the heights of the two child subtrees of any node differ by at most one.
- **Bloom Filter :** - A probabilistic data structure that tests whether an element is a member of a set.
- **Graph :** - A collection of elements called nodes. Each node has a value and a list of references to the nodes neighbours.
- **Directed Graph :** - A graph in which the edges have a direction.
- **Undirected Graph :** - A graph in which the edges do not have a direction.
- **Weighted Graph :** - A graph in which each edge has a weight.
- **Directed Acyclic Graph :** - A directed graph with no cycles.
- **Trie :** - A tree in which each node represents a common prefix of its children.

## What is the difference between an array and a linked list?

| Array | Linked List |
| --- | --- |
| A collection of elements identified by index or key. | A collection of elements called nodes. |
| The elements are stored in contiguous memory locations. | Each node has a value and a pointer to the next node in the list. |
| The size of the array is fixed at compile time. | The size of the linked list is dynamic. |
| for example: int[] numbers = new int[5]; | for example: LinkedList<String> names = new LinkedList<>(); |

## What is the difference between a stack and a queue?

| Stack | Queue |
| --- | --- |
| A collection of elements with two main operations: push, which adds an element to the top of the stack, and pop, which removes the most recently added element from the stack. | A collection of elements with two main operations: enqueue, which adds an element to the back of the queue, and dequeue, which removes the element at the front of the queue. |
| for example: Stack<String> names = new Stack<>(); | for example: Queue<String> names = new LinkedList<>(); |

## What is the difference between a hash table and a tree?

| Hash Table | Tree |
| --- | --- |
| A collection of elements that are accessed via a key. | A collection of elements called nodes. |
| Each element is stored at a position in the hash table that is determined by the hash function. | Each node has a value and a list of references to the nodes children. |
| for example: HashMap<String, String> capitals = new HashMap<>(); | for example: TreeNode<String> root = new TreeNode<>("root"); |

## What is the difference between a binary tree and a binary search tree?

| Binary Tree | Binary Search Tree |
| --- | --- |
| A tree in which each node has at most two children. | A binary tree in which the value of the left child is less than or equal to the value of the parent node, and the value of the right child is greater than or equal to the value of the parent node. |
| for example: TreeNode<String> root = new TreeNode<>("root"); | for example: TreeNode<Integer> root = new TreeNode<>(5); |

## What is the difference between a heap and a binary search tree?

| Heap | Binary Search Tree |
| --- | --- |
| A tree in which each node has a value greater than or equal to the value of its children. | A binary tree in which the value of the left child is less than or equal to the value of the parent node, and the value of the right child is greater than or equal to the value of the parent node. |
| for example: PriorityQueue<Integer> numbers = new PriorityQueue<>(); | for example: TreeNode<Integer> root = new TreeNode<>(5); |

## What is the difference between a graph and a tree?

| Graph | Tree |
| --- | --- |
| A collection of elements called nodes. | A collection of elements called nodes. |
| Each node has a value and a list of references to the nodes neighbours. | Each node has a value and a list of references to the nodes children. |
| for example: Graph<String> graph = new Graph<>(); | for example: TreeNode<String> root = new TreeNode<>("root"); |

## What is the difference between a directed graph and an undirected graph?

| Directed Graph | Undirected Graph |
| --- | --- |
| A graph in which the edges have a direction. | A graph in which the edges do not have a direction. |
| for example: Graph<String> graph = new Graph<>(); | for example: Graph<String> graph = new Graph<>(); |

## What is the difference between a weighted graph and an unweighted graph?

| Weighted Graph | Unweighted Graph |
| --- | --- |
| A graph in which each edge has a weight. | A graph in which each edge does not have a weight. |
| for example: Graph<String> graph = new Graph<>(); | for example: Graph<String> graph = new Graph<>(); |

## What is the difference between a directed acyclic graph and a tree?

| Directed Acyclic Graph | Tree |
| --- | --- |
| A directed graph with no cycles. | A collection of elements called nodes. |
| for example: Graph<String> graph = new Graph<>(); | for example: TreeNode<String> root = new TreeNode<>("root"); |

## What is the difference between a trie and a tree?

| Trie | Tree |
| --- | --- |
| A tree in which each node represents a common prefix of its children. | A collection of elements called nodes. |
| for example: Trie trie = new Trie(); | for example: TreeNode<String> root = new TreeNode<>("root"); |

## Explanation with the help of code

### Array

```js
// Create an array
const numbers = [1, 2, 3, 4, 5];
// Access an array element
const first = numbers[0];
const last = numbers[numbers.length - 1];
// Loop over an array
numbers.forEach((number) => {
  console.log(number);
});
// Add to the end of an array
numbers.push(6);
// Remove from the end of an array
numbers.pop();
// Add to the front of an array
numbers.unshift(0);
// Remove from the front of an array
numbers.shift();
// Find the index of an item in the array
numbers.indexOf(2);
// Remove an item by index position
numbers.splice(2, 1);
// ...
```

### Linked List

```js
// Create a linked list
const list = new LinkedList();
// Add elements to the linked list
list.add("a");
list.add("b");
list.add("c");
// Remove elements from the linked list
list.remove("b");
// Loop over the linked list
let current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
// ...
```

### Stack

```js
// Create a stack
const stack = new Stack();
// Add elements to the stack
stack.push("a");
stack.push("b");
stack.push("c");
// Remove elements from the stack
stack.pop();
// Loop over the stack
let current = stack.top;
while (current) {
  console.log(current.value);
  current = current.next;
}
// ...
```

### Queue

```js
// Create a queue
const queue = new Queue();
// Add elements to the queue
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
// Remove elements from the queue
queue.dequeue();
// Loop over the queue
let current = queue.front;
while (current) {
  console.log(current.value);
  current = current.next;
}
// ...
```

### Hash Table

```js
// Create a hash table
const hashTable = new HashTable();
// Add elements to the hash table
hashTable.set("a", 1);
hashTable.set("b", 2);
hashTable.set("c", 3);
// Remove elements from the hash table
hashTable.delete("b");
// Loop over the hash table
hashTable.forEach((value, key) => {
  console.log(key, value);
});
// ...
```

### Tree

```js
// Create a tree
const tree = new Tree();
// Add elements to the tree
tree.add("a");
tree.add("b", "a");
tree.add("c", "a");
// Remove elements from the tree
tree.remove("b");
// Loop over the tree
tree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Binary Tree

```js
// Create a binary tree
const tree = new BinaryTree();
// Add elements to the binary tree
tree.add("a");
tree.add("b", "a");
tree.add("c", "a");
// Remove elements from the binary tree
tree.remove("b");
// Loop over the binary tree
tree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Binary Search Tree

```js
// Create a binary search tree
const tree = new BinarySearchTree();
// Add elements to the binary search tree
tree.add(5);
tree.add(3);
tree.add(7);
// Remove elements from the binary search tree
tree.remove(3);
// Loop over the binary search tree
tree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Heap

```js
// Create a heap
const heap = new Heap();
// Add elements to the heap
heap.add(5);
heap.add(3);
heap.add(7);
// Remove elements from the heap
heap.remove(3);
// Loop over the heap
heap.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Graph

```js
// Create a graph
const graph = new Graph();
// Add elements to the graph
graph.add("a");
graph.add("b");
graph.add("c");
// Remove elements from the graph
graph.remove("b");
// Loop over the graph
graph.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Directed Graph

```js
// Create a directed graph
const graph = new DirectedGraph();
// Add elements to the directed graph
graph.add("a");
graph.add("b");
graph.add("c");
// Remove elements from the directed graph
graph.remove("b");
// Loop over the directed graph
graph.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Undirected Graph

```js
// Create an undirected graph
const graph = new UndirectedGraph();
// Add elements to the undirected graph
graph.add("a");
graph.add("b");
graph.add("c");
// Remove elements from the undirected graph
graph.remove("b");
// Loop over the undirected graph
graph.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Weighted Graph

```js
// Create a weighted graph
const graph = new WeightedGraph();
// Add elements to the weighted graph
graph.add("a");
graph.add("b");
graph.add("c");
// Remove elements from the weighted graph
graph.remove("b");
// Loop over the weighted graph
graph.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Directed Acyclic Graph

```js
// Create a directed acyclic graph
const graph = new DirectedAcyclicGraph();
// Add elements to the directed acyclic graph
graph.add("a");
graph.add("b");
graph.add("c");
// Remove elements from the directed acyclic graph
graph.remove("b");
// Loop over the directed acyclic graph
graph.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Trie

```js
// Create a trie
const trie = new Trie();
// Add elements to the trie
trie.add("a");
trie.add("b");
trie.add("c");
// Remove elements from the trie
trie.remove("b");
// Loop over the trie
trie.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Bloom Filter

```js
// Create a bloom filter
const bloomFilter = new BloomFilter();
// Add elements to the bloom filter
bloomFilter.add("a");
bloomFilter.add("b");
bloomFilter.add("c");
// Remove elements from the bloom filter
bloomFilter.remove("b");
// Loop over the bloom filter
bloomFilter.traverse((node) => {
  console.log(node.value);
});
// ...
```

### B-Tree

```js
// Create a b-tree
const bTree = new BTree();
// Add elements to the b-tree
bTree.add("a");
bTree.add("b");
bTree.add("c");
// Remove elements from the b-tree
bTree.remove("b");
// Loop over the b-tree
bTree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Red-Black Tree

```js
// Create a red-black tree
const redBlackTree = new RedBlackTree();
// Add elements to the red-black tree
redBlackTree.add(5);
redBlackTree.add(3);
redBlackTree.add(7);
// Remove elements from the red-black tree
redBlackTree.remove(3);
// Loop over the red-black tree
redBlackTree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### Splay Tree

```js
// Create a splay tree
const splayTree = new SplayTree();
// Add elements to the splay tree
splayTree.add(5);
splayTree.add(3);
splayTree.add(7);
// Remove elements from the splay tree
splayTree.remove(3);
// Loop over the splay tree
splayTree.traverse((node) => {
  console.log(node.value);
});
// ...
```

### AVL Tree

```js
// Create an avl tree
const avlTree = new AVLTree();
// Add elements to the avl tree
avlTree.add(5);
avlTree.add(3);
avlTree.add(7);
// Remove elements from the avl tree
avlTree.remove(3);
// Loop over the avl tree
avlTree.traverse((node) => {
  console.log(node.value);
});
// ...
```


