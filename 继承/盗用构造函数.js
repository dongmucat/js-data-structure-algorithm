function  SuperType(){
    this.color=["red","green","blue"];
}
function  SubType(){
    //继承自SuperType
    // 关键
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.color.push("black");
console.log(instance1.color);//"[red,green,blue,black]"