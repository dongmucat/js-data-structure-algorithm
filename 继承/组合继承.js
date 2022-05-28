/* 
基本思想是使用原型链继承原型上的属性和方法，通过盗用构造函数继承实例属性，
这样的好处就是可以把方法定义在原型上复用，每个实例又有自己的属性

*/

// 声明 SuperType 构造函数
function SuperType(name) {
    this.name = name;
    this.colors = ["red","yellow","bule"];
}
// 在SuperType.prototype上添加方法sayName
SuperType.prototype.sayName = function(){
    console.log(this.name);
}

// 声明 SubType 构造函数
function SubType(name,age) {
    // 非常重要，盗用SuperType构造函数
    // 此处的this一般来说指向new出来的实例
    // !!!!!!!!!!非常重要！！！！！！！！！！！
    SuperType.call(this,name);
    // SubType实例的自身属性
    this.age = age;
}

// 如果一个原型是另外一个的实例，则这个原型本身会有一个内部指针指向另外一个原型
// 在此处 SubType.prototype 内部会有一个__proto__指针指向 SuperType.prototype
// SubType.prototype中的constructor被重写为指向SuperType
SubType.prototype = new SuperType();

// 注意此处先需要重写SubType.prototype（也就是先执行上面一句） 才能给它添加方法
// 在SubType.prototype上添加方法
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
function test(){
    let instance = new SubType("jackson",22);
    console.log(instance.constructor === SuperType); // true
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