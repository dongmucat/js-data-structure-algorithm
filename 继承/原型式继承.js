//object()对传入其中的对象执行了一次浅复制，将构造函数F的原型直接指向传入的对象
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
