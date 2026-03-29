export function LinearSearch(array: number[], key: number): number {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length < 1) return -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) return i;
  }
  return -1;
}

export default LinearSearch;
