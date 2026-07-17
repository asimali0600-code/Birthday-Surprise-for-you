/* ============================================
   Premium Effects - Happy Birthday Afia Nawaz
   premium.js
============================================ */

// Fade-in animation for sections
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Countdown Timer
const countdown = document.createElement("div");
countdown.id="countdown";
countdown.style.position="fixed";
countdown.style.top="90px";
countdown.style.right="20px";
countdown.style.background="rgba(0,0,0,.6)";
countdown.style.color="#d4af37";
countdown.style.padding="12px 18px";
countdown.style.borderRadius="15px";
countdown.style.zIndex="999";
countdown.style.fontWeight="600";
document.body.appendChild(countdown);

const birthday = new Date("2026-07-17T00:00:00");

function updateCountdown(){

let now = new Date();

let diff = birthday - now;

if(diff < 0){

countdown.innerHTML = "🎉 Happy Birthday Afia Nawaz ❤️";
return;

}

let days = Math.floor(diff/(1000*60*60*24));

let hrs = Math.floor((diff/(1000*60*60))%24);

let mins = Math.floor((diff/(1000*60))%60);

countdown.innerHTML =
`⏳ ${days}d ${hrs}h ${mins}m`;

}

setInterval(updateCountdown,1000);

updateCountdown();

// Typing Animation
const letter = document.querySelector(".letter-box p");

if(letter){

const original = letter.innerHTML;

letter.innerHTML="";

let i=0;

function typeLetter(){

if(i<original.length){

letter.innerHTML+=original.charAt(i);

i++;

setTimeout(typeLetter,18);

}

}

setTimeout(typeLetter,1200);

}

// Floating Golden Stars
function createStar(){

let star=document.createElement("div");

star.innerHTML="⭐";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="110vh";

star.style.fontSize=(10+Math.random()*20)+"px";

star.style.opacity=Math.random();

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{transform:"translateY(0)",opacity:0},

{transform:"translateY(-120vh)",opacity:1},

{transform:"translateY(-150vh)",opacity:0}

],{

duration:7000+Math.random()*3000

});

setTimeout(()=>star.remove(),10000);

}

setInterval(createStar,500);

// Surprise Welcome
window.addEventListener("load",()=>{

setTimeout(()=>{

alert("🎂 Welcome!\n\nHappy Birthday Afia Nawaz ❤️\n\nMay Allah bless you with endless happiness, success, health and peace. Ameen 🤲");

},2500);

});

// Glow Effect
setInterval(()=>{

document.querySelectorAll("button").forEach(btn=>{

btn.animate([

{boxShadow:"0 0 10px gold"},

{boxShadow:"0 0 35px gold"},

{boxShadow:"0 0 10px gold"}

],{

duration:1800

});

});

},2000);

// Floating Wishes
const wishes=[
"💖 Stay Happy",
"🌹 Allah Bless You",
"🎂 Happy Birthday",
"✨ Keep Smiling",
"❤️ Best Sister"
];

function floatingWish(){

let w=document.createElement("div");

w.innerHTML=wishes[Math.floor(Math.random()*wishes.length)];

w.style.position="fixed";

w.style.left=Math.random()*90+"vw";

w.style.bottom="-40px";

w.style.color="#FFD700";

w.style.fontWeight="600";

w.style.pointerEvents="none";

document.body.appendChild(w);

w.animate([

{transform:"translateY(0)",opacity:1},

{transform:"translateY(-120vh)",opacity:0}

],{

duration:9000

});

setTimeout(()=>w.remove(),9000);

}

setInterval(floatingWish,2500);