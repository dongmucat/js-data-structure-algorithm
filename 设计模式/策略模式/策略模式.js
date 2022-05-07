/* 策略模式是定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

策略模式的目的就是使算法的使用与算法分离开来。封装的算法具有一定的独立性，不会随客户端的变化而变化。 */


const arithmetic = {
    add(number1, number2) {
        return number1 + number2;
    },
    subtract(number1, number2) {
        return number1 - number2;
    },
    multiply(number1, number2) {
        return number1 * number2;
    },
    divide(number1, number2) {
        return number1 / number2;
    },
};

function strategyMode(type, ...args) {
    return arithmetic[type](...args)
}

console.log(strategyMode('subtract', 1, 2))

