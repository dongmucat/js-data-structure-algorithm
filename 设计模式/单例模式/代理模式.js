/* 使用代理模式可以降低耦合度，开发Singleton就可以更专注一些*/
class SingletonProxy {
    constructor(name) {
        /* 如果为空 */
        if (!SingletonProxy.instance) {
            return SingletonProxy.instance = new Singleton(name);
        }
        return SingletonProxy.instance;
    }
}

class Singleton {
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const Jack = new SingletonProxy('Jack');
const Tom = new SingletonProxy('Tom');

console.log(Jack === Tom); // true
console.log(Jack.getName());  // 'Winner'
console.log(Tom.getName());  // 'Winner'
console.log(Jack);
console.log(Tom); 