function binarySearch(nums, target) {
    // 左闭右闭区间
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let left = 0;
    let right = nums.length - 1;
    // 当left = right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1; // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1; // 去右面闭区间寻找
        } else {
            // nums[mid] = target
            return mid;
        }
    }
    // 如果找不到返回 -1
    return -1;
};

// test
const arr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(arr,3));
console.log(binarySearch(arr,10));