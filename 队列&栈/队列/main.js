let view = document.querySelector("#view")
let calling = document.querySelector("#calling")
let Take = document.querySelector("#Take")
let current = document.querySelector("#current")
let surplus = document.querySelector("#surplus")

let n =0;
let surplusData = [];
console.log(Take)
Take.onclick = ()=>{
    n++
    surplusData.push(n)
    current.innerHTML = `当前号:${n}`
    surplus.innerHTML = `当前队列:${JSON.stringify(surplusData)}`
}
calling.onclick=()=>{
    if(surplusData.length === 0){
        return alert("没人了")
    }
    let del = surplusData.shift()
    view.innerHTML += `请${del}号顾客取餐<br>`
    surplus.innerHTML = `当前队列:${JSON.stringify(surplusData)}`
}
