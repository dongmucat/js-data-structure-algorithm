/**
 * 快速排序
 *
 * @param {Array} arr 数组
 * @param {Number} begin 下标
 * @param {Number} end 下标
 */
function qsort(arr, begin, end) {
  if (begin < end) {
    let left = begin;
    let right = end;
    // 选取第一个为基准值
    let pivot = arr[begin];
    while (left < right) {
      while (arr[right] > pivot && left < right) {
        right--;
      }
      arr[left] = arr[right];
      while (arr[left] < pivot && left < right) {
        left++;
      }
      arr[right] = arr[left];
    }
    arr[left] = pivot;
    qsort(arr, begin, left - 1);
    qsort(arr, left + 1, end);
  }
  return;
}

let arr = [2, 3, 1, 4, 8, 7, 9, 6];
qsort(arr,0,arr.length-1);
console.log(arr);
