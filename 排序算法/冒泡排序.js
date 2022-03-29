/* 冒泡排序为两个相邻元素之间的（在一定交换规则下）交换
    时间复杂度平均为O(n^2)
    空间复杂度为O(1)
    时间复杂度最坏为O(n^2)
    时间复杂度最好为O(n)
    
*/
function bubbleSort(arr){
    // 冒泡排序
    const len = arr.length;
    /* 大遍历 */ 
    for(let i = 0; i < len - 1; i++){
        /* 小遍历 */
        for (let j = 0; j < len - 1- i; j++) {
            /* 交换规则为升序：即大的排在后面 */
            /* swap */
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// test
const arr = [2,4,7,2,9,5,3,345,34,6];
console.log(bubbleSort(arr));

