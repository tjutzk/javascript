// call实现
function test() {
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
    return ctx[fn](...args)
}
var testObject = {
    name:'call实现'
}
test.callme(testObject)