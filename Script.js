// 4 pillor od DOM -  Document Object Model
// Selector
// Change html
// Change CSS
// Event Listner

let h = document.querySelector('h1')
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
 
let a = 0;
inc.addEventListener("click",function(){
a++;
h.innerHTML = a;
})

dec.addEventListener("click",function(){
a--;
h.innerHTML = a;
})

// new line
