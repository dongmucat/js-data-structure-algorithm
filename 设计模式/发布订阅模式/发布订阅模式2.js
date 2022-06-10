/* 
    自我感觉这样写的话比较简单点
    以事件类型type作为Map的key值，以数组作为value值，
    数组里面装的是一个个执行的回调函数，
    通过$on注册的事件如果是相同的type就会被push同一个数组当中，
    调用$emit的时候找到对应的type循环数组执行里面所有的回调函数，
    调用$off的时候直接删除key就可了
*/

class EventBus {
    constructor() {
        this.eventsMap = new Map();
    }
    /**
     * 用于注册事件监听
     * @param {String} event 事件类型（名称）
     * @param {Function} callback 回调函数
     */
    $on(event, callback) {
        // 如果这个事件类型不存在，则需要注册
        if (!this.eventsMap.has(event)) {
            this.eventsMap.set(event, []);
        }
        // 都要走  加入callback的逻辑
        const callbackArray = this.eventsMap.get(event);
        callbackArray.push(callback)
    }
    /**
     * 用于触发事件，执行回调函数
     * @param {String} event 事件类型（名称）
     */
    $emit(event) {
        // 如果这个事件类型不存在，则提示
        if (!this.eventsMap.has(event)) {
            throw new Error('事件类型不存在，请先用$on注册事件监听');
        } else {
            // 事件已存在，则执行callback
            const callbackArray = this.eventsMap.get(event);
            callbackArray.forEach(callback => {
                callback()
            });
        }
    }
    /**
     * 用于注销事件
     * @param {String} event 事件类型（名称）
     * @return {Number} 成功返回1，失败返回-1
     */
    $off(event) {
        // 如果这个事件类型不存在，则提示
        if (!this.eventsMap.has(event)) {
            throw new Error('事件类型不存在，请先用$on注册事件监听');
        } else {
            this.eventsMap.delete(event);
        }
    }
}

const eventBus = new EventBus();

eventBus.$on('log', function () {
    console.log('蘑菇怪')
})
eventBus.$on('log', function () {
    console.log('灵活就业小子')
})
eventBus.$on('log', function () {
    console.log('0 offer')
})

eventBus.$emit('log');
eventBus.$off('log');
eventBus.$emit('log');