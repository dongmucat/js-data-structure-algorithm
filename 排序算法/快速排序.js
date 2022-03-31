/*
    快速排序思想：　　（1）在数据集之中，选择一个元素作为"基准"（pivot）。

　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

    时间复杂度：O(nlogn)
    空间复杂度：O(logn)
    时间复杂度最好：O(nlogn)
    时间复杂度最坏：O(n^2)
    不稳定
*/

function quickSort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

//test
const arr = [2,4,7,2,9,5,3,345,34,6];
console.log(quickSort(arr));