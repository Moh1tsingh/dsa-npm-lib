type SortOrder = 1 | -1;

function Merge(left: number[], right: number[], order: SortOrder): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  if (order === 1) {
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  } else {
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  }

  result.push(...left.slice(i));
  result.push(...right.slice(j));
  return result;
}

export function MergeSort(array: number[], order: SortOrder = 1): number[] {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length <= 1) return array;
  if (order !== 1 && order !== -1)
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";

  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  const sortedLeft = MergeSort(leftHalf, order);
  const sortedRight = MergeSort(rightHalf, order);

  return Merge(sortedLeft, sortedRight, order);
}

export default MergeSort;
