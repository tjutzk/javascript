// call实现
function test(value) {
    console.log(value)
    console.log(this.name)
}
Function.prototype.callme = function () {
    let fn = Symbol()
    let ctx = arguments[0] || window
    ctx[fn] = this
    let args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    let res =  ctx[fn](...args)
    delete ctx[fn]
    return res
}
var testObject = {
    name:'call实现',
    applyName:'apply实现',
    bindName:'bind实现'
}
test.callme(testObject, '-----')

// apply实现
function applyTest(value) {
    console.log(value)
    console.log(this.applyName)
}
Function.prototype.applyme = function () {
    let fn = Symbol()
    let ctx = arguments[0] || window
    ctx[fn] = this
    let args = []
    if(arguments[1] &&  Object.prototype.toString.call(arguments[1]) === "[object Array]"){
        args = arguments[1]
    }else{
        console.log('参数不正确')
        return new Error('参数不正确')
    }
    let res =  ctx[fn](...args)
    delete ctx[fn]
    return res
}
applyTest.applyme(testObject,['-----'])

// bind实现
function bindTest(value) {
    console.log(value)
    console.log(this.bindName)
}
Function.prototype.bindme = function () {
    let fn = Symbol()
    let ctx = arguments[0] || window
    ctx[fn] = this
    let args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    let res =  function () {
        return ctx[fn](...args)
    }
    return res
}
bindTest.bindme(testObject,'-----')()