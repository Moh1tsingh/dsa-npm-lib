import { ListNode } from "./ListNode.js";

export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor(head?: T) {
    if (head === undefined || head === null) {
      this.head = null;
    } else {
      this.head = new ListNode(head);
    }
  }

  createNew(val: T): ListNode<T> {
    if (!this.head) {
      this.head = new ListNode(val);
      return this.head;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new ListNode(val);
      return node.next;
    }
  }

  size(): number {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst(): T {
    if (!this.head) throw "List is empty";
    return this.head.data;
  }

  getLast(): T | null {
    let node = this.head;
    if (!node) return null;
    while (node.next) {
      node = node.next;
    }
    return node.data;
  }

  popLast(): T | null {
    let node = this.head;
    if (!node) return null;
    if (!node.next) {
      const poppedNode = node.data;
      this.head = null;
      return poppedNode;
    }
    let prev: ListNode<T> | null = null;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev!.next = null;
    return node.data;
  }

  popFirst(): T {
    if (!this.head) throw "List is empty";
    const poppedNode = this.head.data;
    this.head = this.head.next;
    return poppedNode;
  }

  clear(): void {
    this.head = null;
  }

  show(): T[] {
    const res: T[] = [];
    let node = this.head;
    while (node) {
      res.push(node.data);
      node = node.next;
    }
    return res;
  }
}

export default LinkedList;
