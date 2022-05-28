/* 
寄生式继承就是创建一个实现继承的函数，以某种方式来增强（扩展）对象，然后返回这个对象
*/

function createAnother(obj) {
    // 啊？这不是，如果obj已经存在的话，clone不是和obj指向同一块地方吗？就这？
    let clone = Object(obj);
    // 在clone上添加方法
    clone.sayName = function () {
        console.log(this.name);
    }
    return clone;
}

// 定义person
let person = {
    name:'jack'
}
// anotherPerson 和 person 指向同一个地方。。。。无语
let anotherPerson = createAnother(person);
anotherPerson.sayName();
console.log(anotherPerson);
console.log(person);
console.log(anotherPerson === person);

