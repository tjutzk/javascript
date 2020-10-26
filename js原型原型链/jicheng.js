// js 继承
function People(name){
    //属性
    this.name = name || 'luming'
    this.info = {
        id:'20200720',
        sex:'男'
    }
    //实例方法 每次新建的时候都会新建一个sleep函数，不能使用该方式进行
    this.sleep=function(){
        console.log(this.name + '正在睡觉')
    }
}
People.prototype.sayName = function () {
    console.log('我是' + this.name)
}
// 原型链继承
/*缺点：
引用类型的属性被所有实例共享
在创建Child 的实例时， 不能向Person传参
*/
function man() {}
man.prototype = new People()
let man1 = new man()
let man2 = new man()
man1.sayName()
man1.info.id = '111'
console.log(man1.info.id) //111
console.log(man2.info.id) //111

// 借用构造函数继承
/*缺点：
引用类型的属性被所有实例共享
在创建Child 的实例时， 不能向Person传参
*/
function Person(){
    this.name = 'xiaopao';
    this.colors = ['red', 'blue', 'green'];
}

Person.prototype.getName = function(){
    console.log(this.name);
}

function Child(){
    Person.call(this);
}

var child1 = new Child();
var child2 = new Child();
child1.colors.push('yellow');
console.log(child1.name);
console.log(child1.colors); // ["red", "blue", "green", "yellow"]
console.log(child2.colors); // ["red", "blue", "green"]
console.log(child1 instanceof Child) //true
console.log(child1 instanceof Person) //false