export type Graph<T extends string | number = string> = Record<string, T[]>;

export function BreadthFirstSearch<T extends string | number = string>(graph: Graph<T>, startNode: T): T[] {
  const queue: T[] = [startNode];
  const isVisited = new Set<T>();
  isVisited.add(startNode);
  const res: T[] = [];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    res.push(currentNode);
    const sisterNodes = graph[currentNode as string];
    for (const sisterNode of sisterNodes) {
      if (!isVisited.has(sisterNode)) {
        isVisited.add(sisterNode);
        queue.push(sisterNode);
      }
    }
  }
  return res;
}

export default BreadthFirstSearch;
