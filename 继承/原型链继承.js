function SuperType() {
    this.fatherName = 'jack';
}

SuperType.prototype.getSuperValue = function() {
    return this.fatherName;
}

function SubType() {
    this.sonName = 'nico';
}

// 关键!!!
// 如果一个原型是另外一个的实例，则这个原型对象本身会有一个内部指针(__proto__)指向另外一个原型对象
SubType.prototype = new SuperType(); 

SubType.prototype.getSubValue = function() {
    return this.sonName ;
}

const instance = new SubType();
console.log(instance.getSuperValue()); // jack
