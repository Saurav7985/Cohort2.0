let body = document.body
let img = document.querySelector('img')

body.addEventListener("mousemove",(val)=>{

    img.style.left = val.x+"px";
    img.style.top = val.y+"px";

})