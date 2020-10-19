// call实现
function test() {
    console.log(this.name)
}
var testObject = {
    name:'call实现'
}
test.call(testObject)