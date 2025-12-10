let body = document.body
let a = new Audio("Tune/a6-82015.mp3");
let s = new Audio("Tune/a6-102820.mp3");
let d = new Audio("Tune/b6-82017.mp3");
let f = new Audio("Tune/c6-102822.mp3");
let g = new Audio("Tune/cinematic-piano-note-362716.mp3");
let h = new Audio("Tune/d6-82020.mp3");
let j = new Audio("Tune/e6-82016.mp3");
let k = new Audio("Tune/f6-102819.mp3");
let l = new Audio("Tune/g6-82013.mp3");
let z = new Audio("Tune/g6-82014.mp3");

let h3 = document.querySelector('h3')

body.addEventListener("keydown",function(dets){
console.log(dets.key)
  h3.innerHTML = dets.key

    switch (dets.key) {
      case "a": a.play();
        break;
      case "s": s.play();
        break;
      case "d": d.play();
        break;
      case "f": f.play();
        break;
      case "g": g.play();
        break;
      case "h": h.play();
        break;
      case "j": j.play();
        break;
      case "k": k.play();
        break;
      case "l": l.play();
        break;
      case "z": z.play();
        break;
    }
})