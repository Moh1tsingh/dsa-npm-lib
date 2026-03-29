import { LinkedList } from "../Linked-List/LinkedList.js";

export class Queue<T> {
  private queue: LinkedList<T>;

  constructor() {
    this.queue = new LinkedList<T>();
  }

  push(value: T): void {
    this.queue.createNew(value);
  }

  pop(): T {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.popFirst();
  }

  top(): T {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.getFirst();
  }

  isEmpty(): boolean {
    return this.queue.size() === 0;
  }

  show(): T[] {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.show();
  }
}

export default Queue;
