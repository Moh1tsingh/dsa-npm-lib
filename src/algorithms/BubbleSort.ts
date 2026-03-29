type SortOrder = 1 | -1;

export function BubbleSort(array: number[], order: SortOrder = 1): number[] {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length <= 1) return array;
  if (order === 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  } else if (order === -1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  } else {
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";
  }
}

export default BubbleSort;
