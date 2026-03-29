export function BinarySearch(array: number[], key: number): number {
  if (!Array.isArray(array)) throw "Given input is not an array";
  array.sort((a, b) => a - b);
  let l = 0;
  let h = array.length - 1;

  while (l <= h) {
    const mid = Math.floor((l + h) / 2);
    if (array[mid] === key) return mid;
    else if (array[mid] < key) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
}

export default BinarySearch;
