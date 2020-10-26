/*
JavaScript 中，万物皆对象！但对象也是有区别的。
分为普通对象和函数对象，Object ，Function 是JS自带的函数对象。
每个对象都有原型（null和undefined除外），你可以把它理解为对象的默认属性和方法。
 */
/*
Object：Object是一个函数对象，Object的原型就是一个Object对象，它里面存在着一些对象的方法和属性，例如最常见的toString方法。

新建对象：用new Object或者{}建的对象是普通对象，它没有prototype属性，只有__proto__属性，它指向Object.prototype。

Array：Array也是一个函数对象，它的原型就是Array.prototype，它里面存在着一些数组的方法和属性，例如常见的push，pop等方法。

Function：Function也是一个函数对象，但它有点特殊，它的原型就是一个function空函数。

自定义函数：它的原型就是你给它指定的那个东西。如果你不指定，那它的原型就是一个Object.prototype。
默认: fun.prototype === Object.prototype => true
 */
/*
普通对象没有prototype属性，只有__proto__
var o = {name:"tsrot"};
console.log(o.__proto__) =》 Object{}
console.log(o.prototype) =》 undefined
console.log(o.__proto__ === Object.prototype) =》true; 

构造函数
function Parent(){
    this.name = "i am parent";
}
Parent.prototype = {age:24};
function Child(){
    this.name = "i am child";
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
var child = new Child();
console.log(child.__proto__); => Object{}
console.log(Child.prototype); => Object{}
console.log(child.__proto__ === Child.prototype) => true
console.log(Child.prototype.__proto__ === Parent.prototype); => true
console.log(Parent.prototype.__proto__ === Object.prototype); => true

数组的__proto__
var arr = [1,2,3];
console.log(arr.__proto__);  => [Symbol(Symbol.unscopables): Object] 
console.log(Array.prototype); => [Symbol(Symbol.unscopables): Object]
console.log(arr.__proto__ === Array.prototype); => true

函数的__proto__
var fun = function(){
    var hello = "i am function"
}
如果不指定fun.prototype,则fun.prototype === Object.prototype => true
fun.prototype = {name:"tsrot"};
console.log(fun.prototype); => Object {name: "tsrot"} 
console.log(fun.__proto__); => function(){}
console.log(fun.prototype === fun.__proto__); => false
console.log(fun.__proto__ === Function.prototype); => true
*/

