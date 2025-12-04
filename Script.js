let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ["Gaurav is Developer","Suryansh is cook","Hemant is bussiness analist","you are coder","stay active","stay motivated"];

btn.addEventListener('click',function(){
  let index = Math.floor(Math.random()*arr.length)
  let x = Math.random()*100
  let y = Math.random()*100
  let c1 = Math.random()*255
  let c2 = Math.random()*225
  let c3 = Math.random()*225
  let rot = Math.floor(Math.random()*360)
  let scl = Math.random()*4

let h3 = document.createElement('h3')
h3.innerHTML = arr[index];
h3.style.color = `rgb(${c1},${c2},${c3})`
h3.style.position = 'absolute'
h3.style.top = x + "%"
h3.style.left = y + "%"
h3.style.rotate = rot + "deg"
h3.style.scale = scl

  main.appendChild(h3)
})