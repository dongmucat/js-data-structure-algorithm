/*
计数排序：是一种利用计数统计的思想来进行排序，适用于整数和范围较小的数据。
时间复杂度：O(n+k)，其中n为要排序的数组的长度，k为数组中的元素的范围。
空间复杂度：O(n+k)，其中n为要排序的数组的长度，k为数组中的元素的范围。
时间复杂度最好：O(n+k)，其中n为要排序的数组的长度，k为数组中的元素的范围。
时间复杂度最坏：O(n+k)，其中n为要排序的数组的长度，k为数组中的元素的范围。
*/

function countingSort(arr) {
    const bucket = [];//定义一个桶
    const len = arr.length;//原数组的长度
    const max = Math.max(...arr);//数组中的最大值
    const min = Math.min(...arr);//数组中的最小值

    //初始化桶
    for (let i = 0; i < len; i++) {
        //取出arr中的元素值
        let temp = arr[i];
        //装桶计数
        bucket[temp] = (bucket[temp] || 0) + 1;
    }

    //重新排列数组
    //i用于控制原数组的索引值,val用于控制桶的值
    for(let val = min,i = 0; val <= max; val++) {
        //桶中的元素值大于0
        while(bucket[val] > 0) {
            //将元素值赋值给arr
            arr[i++] = val;
            //桶中的元素值减1
            bucket[val]--;
        }
    }
    return arr;
}

//test
const arr = [2,4,2,2,1,3];
console.log(countingSort(arr));