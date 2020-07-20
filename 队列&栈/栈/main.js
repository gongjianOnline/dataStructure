function fn1(){
    let a = 1
    return a + fn2()
}
function fn2(){
    let b = 2
    return b + fn3()
}
function fn3(){
    let c = 3
    return c
}
console.log(fn1()) 
