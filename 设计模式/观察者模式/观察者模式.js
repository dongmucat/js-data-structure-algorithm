/* 观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时
所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式。 */

// 定义一个目标对象
class Subject {
    constructor() {
        this.Observers = [];
    }
    add(observer) {
        //添加
        this.Observers.push(observer);
        console.log(this.Observers);
    }
    remove(observer) {
        //移除
        this.Observers = this.Observers.filter((item) => item !== observer);
        console.log(this.Observers);
    }
    notify() {
        //通知所有观察者
        this.Observers.forEach((item) => {
            item.update();
        });
    }
}
    //定义观察者对象
class Observer {
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(`my name is:${this.name}`);
    }
}

let sub = new Subject();
let obs1 = new Observer("observer11");
let obs2 = new Observer("observer22");
console.log('===========add===========');
sub.add(obs1);
sub.add(obs2);
console.log('===========notify===========');
sub.notify();
console.log('===========removeResult===========');
sub.remove(obs1);