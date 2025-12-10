let img = document.querySelector('img')
let main = document.querySelector("main")
let h3 = document.querySelector('h3')

// main.addEventListener("mouse")

img.addEventListener("mouseenter",function(val){
console.log(val);
h3.innerHTML = "chutki se dur renha..😡😡"
h3.style.color = "black"
main.style.backgroundColor = "red"
})
img.addEventListener("mouseleave",function(val){
console.log(val);
h3.innerHTML = "Ab dur hi rhna..😤😤"
h3.style.color = "white"
main.style.backgroundColor = "black"
})