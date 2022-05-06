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

let Winner = new SingletonProxy('Winner');
let Looser = new SingletonProxy('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'