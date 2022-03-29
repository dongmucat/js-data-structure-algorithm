/* 
    希尔排序：是插入排序的一种更高效的改进版本(其实就是step不再是1了)
    时间复杂度：O(n^1.3)
    空间复杂度：O(1)
    时间复杂度最好：O(n)
    时间复杂度最坏：O(n^2)
*/

function shellSort(arr){
    const len = arr.length;
    for(let step = Math.floor(len / 2); step > 0; step = Math.floor(step / 2)){
        for(let i = step; i < len; i++){
            let preIndex = i - step;
            let current = arr[i];
            while(preIndex >= 0 && arr[preIndex] > current){
                arr[preIndex + step] = arr[preIndex];
                preIndex -= step;
            }
            arr[preIndex + step] = current;
        }
    }  
    return arr;
}