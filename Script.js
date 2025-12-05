let btn = document.querySelector('button')
let h1 = document.querySelector('.lower h1')
let inner = document.querySelector('.inner')

let a = 0;
btn.addEventListener('click',()=>{
  
  btn.style.opacity = 0.5
  btn.style.pointerEvents = 'none'

 let inteval =  setInterval(() => {
    a++
    btn.style.pos
    inner.style.width = `${a}%`
    h1.innerHTML = a+"%";
  }, 50);

  setTimeout(() => {
    btn.innerHTML = "Downloded"
    clearInterval(inteval)
  }, 5000);


})