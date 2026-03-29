# DSA With JavaScript

dsa-with-javascript is a DSA library written in TypeScript that provides basic data structures like Stack, Queue and Linked List along with sorting, searching, and graph traversal algorithms. Works with JavaScript, TypeScript, Node.js, React, and Next.js.

## Installation

```bash
npm install dsa-with-javascript
```

## Usage

### JavaScript (CommonJS)
```javascript
const { Stack, BubbleSort } = require('dsa-with-javascript')
```

### TypeScript / ES Modules
```typescript
import { Stack, BubbleSort, LinkedList } from 'dsa-with-javascript'
```

All data structures support generics in TypeScript:
```typescript
const stack = new Stack<number>()
const queue = new Queue<string>()
const list = new LinkedList<{ id: number; name: string }>()
```

---

### Available Data Structures

#### 1. Stack
```typescript
import { Stack } from 'dsa-with-javascript'

const stack = new Stack<number>()
stack.push(10)      // Add element to top
stack.pop()         // Remove and return top element
stack.top()         // Return top element without removing
stack.isEmpty()     // Returns true if stack is empty
stack.show()        // Returns the stack as an array
```

#### 2. Queue
```typescript
import { Queue } from 'dsa-with-javascript'

const queue = new Queue<number>()
queue.push(10)      // Add element to rear
queue.pop()         // Remove and return front element
queue.top()         // Return front element without removing
queue.isEmpty()     // Returns true if queue is empty
queue.show()        // Returns the queue as an array
```

#### 3. Linked List
```typescript
import { LinkedList } from 'dsa-with-javascript'

const list = new LinkedList<number>()   // Empty list
const list2 = new LinkedList<number>(10) // List with initial value
list.createNew(20)   // Add new node with value 20
list.size()          // Returns the size
list.getFirst()      // Returns data of first node
list.getLast()       // Returns data of last node
list.popFirst()      // Remove and return first node's data
list.popLast()       // Remove and return last node's data
list.clear()         // Clear the list
list.show()          // Returns array of all node values
```

---

### Available Algorithms

#### 1. Binary Search
```typescript
import { BinarySearch } from 'dsa-with-javascript'

const arr = [1, 2, 3, 4, 5]
BinarySearch(arr, 5)  // Returns index if found, -1 if not
```
The array is sorted automatically if not already sorted.

#### 2. Linear Search
```typescript
import { LinearSearch } from 'dsa-with-javascript'

const arr = [1, 2, 3, 4, 5]
LinearSearch(arr, 5)  // Returns index if found, -1 if not
```

#### 3. BubbleSort
```typescript
import { BubbleSort } from 'dsa-with-javascript'

BubbleSort([5, 3, 1, 4, 2])      // Ascending (default)
BubbleSort([5, 3, 1, 4, 2], -1)  // Descending
```

#### 4. InsertionSort
```typescript
import { InsertionSort } from 'dsa-with-javascript'

InsertionSort([5, 3, 1, 4, 2])      // Ascending
InsertionSort([5, 3, 1, 4, 2], -1)  // Descending
```

#### 5. MergeSort
```typescript
import { MergeSort } from 'dsa-with-javascript'

MergeSort([5, 3, 1, 4, 2])      // Ascending
MergeSort([5, 3, 1, 4, 2], -1)  // Descending
```

#### 6. QuickSort
```typescript
import { QuickSort } from 'dsa-with-javascript'

QuickSort([5, 3, 1, 4, 2])      // Ascending
QuickSort([5, 3, 1, 4, 2], -1)  // Descending
```

#### 7. SelectionSort
```typescript
import { SelectionSort } from 'dsa-with-javascript'

SelectionSort([5, 3, 1, 4, 2])      // Ascending
SelectionSort([5, 3, 1, 4, 2], -1)  // Descending
```

#### 8. BreadthFirstSearch
```typescript
import { BreadthFirstSearch } from 'dsa-with-javascript'

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
}
BreadthFirstSearch(graph, "A")  // Returns array of traversed nodes
```

#### 9. DepthFirstSearch
```typescript
import { DepthFirstSearch } from 'dsa-with-javascript'

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
}
DepthFirstSearch(graph, "A")  // Returns array of traversed nodes
```

## Contributing

Pull requests are always welcome. For major changes, please open an issue first
to discuss what you would like to change.

This library is a project created by [Moh1tsingh](https://github.com/Moh1tsingh).
