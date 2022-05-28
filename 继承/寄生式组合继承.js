/* 寄生式组合继承，实际上就是为了解决父类构造函数被调用两次的问题 

*/

function inheritPrototype(subType, superType) {
    // 更具有鲁棒性
    let prototype = Object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    // 指向 superType.prototype
    subType.prototype = prototype; // 赋值对象
}

// 前面这里为 类似组合继承
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
// 这里类似为 寄生式继承
inheritPrototype(SubType, SuperType);
//增强SubType能力
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

function test(){
    let instance = new SubType("jackson",22);
    console.log(instance.constructor === SubType); // true
    instance.colors.push("pink");
    instance.sayName(); // "jackson"
    instance.sayAge();//22
    console.log(instance.colors);// ["red", "yellow", "bule", "pink"]
    
    let instance2 = new SubType("bear", 20);
    console.log(instance2.colors); // ["red", "yellow", "bule"]
    instance2.sayName(); // "bear";
    instance2.sayAge(); // 20
}

test();