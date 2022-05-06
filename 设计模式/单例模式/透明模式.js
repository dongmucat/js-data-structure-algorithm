class CreateSingleton {
    constructor(name) {
        /* 如果为空 */
        if (!CreateSingleton.instance) {
            this.name = name;
            CreateSingleton.instance = this;
        } else {
            return CreateSingleton.instance
        }
    }
    getName() {
        return this.name
    }
}


let Winner = new CreateSingleton('Winner');
let Looser = new CreateSingleton('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName()); // 'Winner'
console.log(Looser.getName());  // 'Winner'
