const user = [
  {
    "name": "atomic.akash",
    "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    "description": "Simple and modern username for casual or aesthetic profile."
  },
  {
    "name": "rahul.rift",
    "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "description": "Energetic username — good for travel or adventure vibes."
  },
  {
    "name": "sky_akash",
    "image": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    "description": "Clean and minimal username for aesthetic posts."
  },
  {
    "name": "codewith_rahul",
    "image": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    "description": "Perfect for coding, tech learning, or educational content."
  },
  {
    "name": "urban_akash",
    "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    "description": "City lifestyle username — modern and stylish."
  },
  {
    "name": "wanderer_rahul",
    "image": "https://images.pexels.com/photos/2100147/pexels-photo-2100147.jpeg",
    "description": "Travel-focused username for adventure profiles."
  },
  {
    "name": "akash.beats",
    "image": "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    "description": "For music lovers or hobby-based profiles."
  },
  {
    "name": "rahul.nova",
    "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    "description": "Modern username with a creative and clean vibe."
  },
  {
    "name": "neon_akash",
    "image": "https://images.pexels.com/photos/1680171/pexels-photo-1680171.jpeg",
    "description": "Trendy and vibrant — perfect for fashion or nightlife posts."
  },
  {
    "name": "rahul.codes",
    "image": "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
    "description": "Professional programming-focused username."
  }
]


let main = document.querySelector('main')

let s = ""

user.forEach(function(val){

s += `<div class="card">
        <img src="${val.image}" alt="">
        <h3>${val.name}</h3>
        <P>${val.description}</P>
       </div> `
      })
      
      
main.innerHTML = s;
