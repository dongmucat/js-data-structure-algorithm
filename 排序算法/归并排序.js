/* 
    1.归并排序的思想是：一开始把数组中的元素都包成一个数组，
    然后拿出两个数组进行有序的合并，一般是2路归并，此后不断重复此操作
    使用递归达到不断重复此过程

    2.时间复杂度：O(nlogn)
    时间复杂度最好：O(nlogn)
    时间复杂度最坏：O(nlogn)
    空间复杂度：O(n)
    稳定性：稳定

*/

function mergeSort(arr) {
    let len = arr.length;
    /* 递归结束条件（必须） */
    if (len === 1) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    /* 递归 */
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right) {
    const result = [];

    while(left.length && right.length) {
        /* 比较规则，谁小谁排前面 */
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    /* 剩余的元素 */
    /* 左边有剩余 */
    while(left.length) {
        result.push(left.shift());
    }
    /* 右边有剩余 */
    while(right.length) {
        result.push(right.shift());
    }

    return result;
}

//test
let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(mergeSort(arr));