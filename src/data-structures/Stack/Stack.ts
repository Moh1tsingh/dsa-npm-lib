import { LinkedList } from "../Linked-List/LinkedList.js";

export class Stack<T> {
  private stack: LinkedList<T>;

  constructor() {
    this.stack = new LinkedList<T>();
  }

  push(value: T): void {
    this.stack.createNew(value);
  }

  pop(): T {
    if (this.stack.size() === 0) throw "Stack is empty";
    return this.stack.popLast() as T;
  }

  top(): T {
    if (this.stack.size() === 0) throw "Stack is empty";
    return this.stack.getLast() as T;
  }

  isEmpty(): boolean {
    return this.stack.size() === 0;
  }

  show(): T[] {
    if (this.stack.size() === 0) throw "Stack is empty";
    return this.stack.show();
  }
}

export default Stack;
