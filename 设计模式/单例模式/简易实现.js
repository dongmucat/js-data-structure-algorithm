/* 单例模式思想在于保证一个特定类仅有一个实例，意味着当你第二次使用同一个类创建信对象时，应得到和第一次创建对象完全相同 */

class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null; // 单例模式的标识 
    }

    getName() {
        console.log(this.name);
    }
    /**
     * 获取单例的静态方法
     */
    static getInstance(name) {
        // 如果已经创建过对象实例，则直接返回之前创建的对象实例，如果没有，则创建这个类的对象实例，病保存到instance这个单例变量标识中
        if (!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}


let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');
console.log(a);
console.log(b);
console.log(a === b); // true
