class AnimalFactory {
    constructor() {
        // 创建一个map
        AnimalFactory.map = new Map();
        // 通过map设置键值对(可以初始化)
        // AnimalFactory.map.set(key->type,value->Class)
    }

    // 返回type所对应的实例对象
    getTypeAnimal(type) {
        return new AnimalFactory.map.get(type)
    }

    //新增type对应的类
    add(type, target) {
        AnimalFactory.map.set(type, target)
    }
}

// 已有的类
class Dog { }
class Cat { }
class Pig { }

// 创建工厂实例
const factory = new AnimalFactory();

// 新增
factory.add('Dog', Dog);
factory.add('Cat', Cat);
factory.add('Pig', Pig);

let myDog = factory.getTypeAnimal('Dog', 'jack');
console.log(myDog);



