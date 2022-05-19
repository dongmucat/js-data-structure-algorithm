/* 所谓透明模式就是需求要用new而只能有一个
   因此我们可以将第一个用new出来的对象引用保存到CreateSingleton.instance
   之后直接返回就可以了
*/
class CreateSingleton {
    constructor(name) {
        /* 如果为空 */
        if (!CreateSingleton.instance) {
            this.name = name;
            CreateSingleton.instance = this;
        }
        /* 直接返回第一个实例引用 */
        return CreateSingleton.instance

    }
    getName() {
        return this.name
    }
}


const Winner = new CreateSingleton('Winner');
const Looser = new CreateSingleton('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName()); // 'Winner'
console.log(Looser.getName());  // 'Winner'
console.log(Winner);
console.log(Looser);
