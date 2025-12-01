// 4 pillor od DOM -  Document Object Model
// Selector
// Change html
// Change CSS
// Event Listner

let h = document.querySelector('h1')
 let btn = document.querySelector('button')

 btn.addEventListener("click",()=>{

    h.innerHTML = "You are gay!";
    h.style.fontSize = "80px";
    h.style.color = "red"
    
    btn.style.backgroundColor = "white"

 })

 // new onegit 