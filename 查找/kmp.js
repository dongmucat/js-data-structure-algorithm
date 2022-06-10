/**
 * 获取前缀表next数组
 * @param {string} needle
 * @return {number}
 */
/* 
    每次求next[i]，可看作前缀与后缀的一次匹配，在该过程中就可以用上之前所求的next，若匹配失败，则像模式串与父串匹配一样，将指针移到next【j-1】上。
    求next过程实际上是dp（动态规划），只与前一个状态有关：
    若不匹配，一直往前退到0或匹配为止
    若匹配，则将之前的结果传递：
*/
const getNext = (needle) => {
    // 初始化
    const needleLen = needle.length;
    const next = new Array(needleLen).fill(0);
    next[0] = 0;
    // len代表共同前后缀的长度
    // i
    for (let i = 1,len = 0; i < needleLen; ++i) {
        while (len > 0 && needle[i] !== needle[len])
            len = next[len - 1]; //向前回退
        if (needle[i] === needle[len]) // 找到相同的前后缀
            len++;
        next.push(len);
    }

    return next;
}

/**
 * 查找字符子串的位置，如果查找不到则返回-1
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const kmp = (haystack, needle) =>{
    if (needle.length === 0)
        return 0;
    
    // 获取next数组
    const next = getNext(needle);
    // 缓存数组长度
    const haystackLen = haystack.length;
    const needleLen = needle.length;

    for (let i = 0, j = 0; i < haystackLen; i++) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needleLen)
            return (i - needleLen + 1);
    }

    return -1;
};

const haystack = 'safweragerawgg';
const needle = 'gg';
console.log(haystack.indexOf(needle)); //indexOf : 12
console.log(kmp(haystack, needle)); //kmp : 12