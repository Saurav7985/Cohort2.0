let IPL = [
    {
      "team": "Chennai Super Kings",
      "team_short": "CSK",
      "primary_color_hex": "#F1C40F",
      "secondary_color_hex": "#1B4F72",
      "uniform_color": "Yellow with blue accents",
      "team_color_theme": "Yellow & Blue",
      "captain": "Ruturaj Gaikwad"
    },
    {
      "team": "Mumbai Indians",
      "team_short": "MI",
      "primary_color_hex": "#004BA0",
      "secondary_color_hex": "#D1A637",
      "uniform_color": "Blue with golden accents",
      "team_color_theme": "Blue & Gold",
      "captain": "Hardik Pandya"
    },
    {
      "team": "Royal Challengers Bengaluru",
      "team_short": "RCB",
      "primary_color_hex": "#DA291C",
      "secondary_color_hex": "#000000",
      "uniform_color": "Red with black & gold",
      "team_color_theme": "Red & Black",
      "captain": "Faf du Plessis"
    },
    {
      "team": "Kolkata Knight Riders",
      "team_short": "KKR",
      "primary_color_hex": "#3A225D",
      "secondary_color_hex": "#D4AF37",
      "uniform_color": "Purple with gold",
      "team_color_theme": "Purple & Gold",
      "captain": "Shreyas Iyer"
    },
    {
      "team": "Rajasthan Royals",
      "team_short": "RR",
      "primary_color_hex": "#EA1A8E",
      "secondary_color_hex": "#004B8D",
      "uniform_color": "Pink with royal blue",
      "team_color_theme": "Pink & Blue",
      "captain": "Sanju Samson"
    },
    {
      "team": "Gujarat Titans",
      "team_short": "GT",
      "primary_color_hex": "#1B1F3B",
      "secondary_color_hex": "#C5B358",
      "uniform_color": "Dark blue with golden",
      "team_color_theme": "Navy Blue & Gold",
      "captain": "Shubman Gill"
    },
    {
      "team": "Sunrisers Hyderabad",
      "team_short": "SRH",
      "primary_color_hex": "#F26522",
      "secondary_color_hex": "#000000",
      "uniform_color": "Orange with black",
      "team_color_theme": "Orange & Black",
      "captain": "Pat Cummins"
    },
    {
      "team": "Delhi Capitals",
      "team_short": "DC",
      "primary_color_hex": "#17479E",
      "secondary_color_hex": "#E41E2B",
      "uniform_color": "Blue with red",
      "team_color_theme": "Blue & Red",
      "captain": "Rishabh Pant"
    },
    {
      "team": "Lucknow Super Giants",
      "team_short": "LSG",
      "primary_color_hex": "#4CC1F7",
      "secondary_color_hex": "#F58220",
      "uniform_color": "Light blue with orange",
      "team_color_theme": "Sky Blue & Orange",
      "captain": "KL Rahul"
    },
    {
      "team": "Punjab Kings",
      "team_short": "PBKS",
      "primary_color_hex": "#ED1B24",
      "secondary_color_hex": "#D4AF37",
      "uniform_color": "Red with golden",
      "team_color_theme": "Red & Gold",
      "captain": "Shikhar Dhawan"
    }
  
]

let h = document.querySelector('h1')
let main = document.querySelector('.main')
let btn = document.querySelector('button')
let h1 = document.querySelector('h2')
let h2 = document.querySelector('h3')

btn.addEventListener("click",function(){
    let winner = IPL[Math.floor(Math.random()*IPL.length)];
    h.innerHTML = winner.team_short
    main.style.backgroundColor = winner.primary_color_hex
    h.style.backgroundColor = winner.secondary_color_hex
    h1.innerHTML = winner.team
    h2.innerHTML = winner.captain
})