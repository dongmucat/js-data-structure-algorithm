/* 
    插入排序:相当于摸牌
    时间复杂度：O(n^2)
    空间复杂度：O(1)
    时间复杂度最好：O(n)
    时间复杂度最坏：O(n^2)
*/

function insertionSort(arr){
    const len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        //前一个元素的索引
        preIndex = i - 1;
        //临时变量存储当前值
        current = arr[i];
        // 如果当前的值比前一个值小，则将前一个值后移一位
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        //此处preIndex可能会出现为-1情况
        arr[preIndex + 1] = current;
    }
    return arr;
}

// test
const arr = [2,4,7,2,9,5,3,345,34,6];
console.log(insertionSort(arr));