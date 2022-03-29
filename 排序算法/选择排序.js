/* 
    选择排序：每次小遍历选择最小（大）的元素（记录索引值），放在最前面
    时间复杂度：O(n^2)
    空间复杂度：O(1)
    时间复杂度最好：O(n^2)
    时间复杂度最坏：O(n^2)
*/
function selectionSort(arr){
    const len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        // 寻找[i, len)区间里的最小值
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 最小值和i位置的元素交换
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// test
const arr = [2,4,7,2,9,5,3,345,34,6];
console.log(selectionSort(arr));
