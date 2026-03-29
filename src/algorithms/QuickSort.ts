type SortOrder = 1 | -1;

function Partition(array: number[], low: number, high: number, order: SortOrder): number {
  const pivot = array[high];
  let i = low - 1;

  if (order === 1) {
    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  } else {
    for (let j = low; j < high; j++) {
      if (array[j] >= pivot) {
        i++;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  const temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
  return i + 1;
}

export function QuickSort(array: number[], low: number = 0, high: number | null = null, order: SortOrder = 1): number[] {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length <= 1) return array;
  if (order !== 1 && order !== -1) {
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";
  }

  if (high === null) {
    high = array.length - 1;
  }
  if (low < high) {
    const pivot_index = Partition(array, low, high, order);
    QuickSort(array, low, pivot_index - 1, order);
    QuickSort(array, pivot_index + 1, high, order);
  }
  return array;
}

export default QuickSort;
