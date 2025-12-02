let box = document.querySelector('.box')
let button = document.querySelector('button')

button.addEventListener("click",function(){
    let c1 = Math.floor((Math.random()*225)+1)
    let c2 = Math.floor((Math.random()*225)+1)
    let c3 = Math.floor((Math.random()*225)+1)

    console.log("changed")
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})
