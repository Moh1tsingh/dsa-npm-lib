export type Graph<T extends string | number = string> = Record<string, T[]>;

export function DepthFirstSearch<T extends string | number = string>(graph: Graph<T>, startNode: T): T[] {
  const stack: T[] = [startNode];
  const isVisited = new Set<T>();
  isVisited.add(startNode);
  const res: T[] = [];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    res.push(currentNode);
    for (const sisterNode of graph[currentNode as string]) {
      if (!isVisited.has(sisterNode)) {
        isVisited.add(sisterNode);
        stack.push(sisterNode);
      }
    }
  }
  return res;
}

export default DepthFirstSearch;
