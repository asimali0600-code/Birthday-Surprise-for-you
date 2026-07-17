/* ======================================
   Luxury Birthday Website
   script.js
====================================== */

const loader = document.getElementById("loader");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const flame = document.querySelector(".flame");
const blowBtn = document.getElementById("blowCandles");
const petals = document.getElementById("petals");
const sparkles = document.getElementById("sparkles");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

/* -------------------------
   Loader
-------------------------- */

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {
            loader.style.display = "none";
        },1000);

    },1800);
});


/* -------------------------
   Music
-------------------------- */

let playing = false;

musicBtn.onclick = () => {

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

music.pause();

playing=false;

musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

}

}


/* -------------------------
   Surprise Button
-------------------------- */

surpriseBtn.onclick=()=>{

music.play();

playing=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

confetti({

particleCount:300,

spread:180,

origin:{y:0.6}

});

alert("Agli baar lai laina\n\nAbi paisai nhi hai 🥹 ");

}


/* -------------------------
   Blow Candle
-------------------------- */

blowBtn.onclick=()=>{

flame.style.display="none";

confetti({

particleCount:400,

spread:220,

origin:{y:.5}

});

}


/* -------------------------
   Rose Petals
-------------------------- */

function createPetal(){

let petal=document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-50px";

petal.style.fontSize=(20+Math.random()*20)+"px";

petal.style.opacity=Math.random();

petal.style.pointerEvents="none";

petal.style.transition="transform linear";

document.body.appendChild(petal);

let duration=8000+Math.random()*5000;

petal.animate([

{transform:"translateY(-50px) rotate(0deg)"},

{transform:`translate(${Math.random()*200-100}px,110vh) rotate(720deg)`}

],{

duration:duration,

iterations:1

});

setTimeout(()=>petal.remove(),duration);

}

setInterval(createPetal,350);


/* -------------------------
   Sparkles
-------------------------- */

function sparkle(){

let s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(8+Math.random()*12)+"px";

s.style.pointerEvents="none";

document.body.appendChild(s);

s.animate([

{opacity:0},

{opacity:1},

{opacity:0}

],{

duration:2000

});

setTimeout(()=>s.remove(),2000);

}

setInterval(sparkle,250);


/* -------------------------
   Floating Hearts
-------------------------- */

function heart(){

let h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.bottom="-30px";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*20)+"px";

h.style.pointerEvents="none";

document.body.appendChild(h);

h.animate([

{transform:"translateY(0)",opacity:1},

{transform:"translateY(-120vh)",opacity:0}

],{

duration:7000

});

setTimeout(()=>h.remove(),7000);

}

setInterval(heart,900);


/* -------------------------
   Fireworks
-------------------------- */

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

let particles=[];

function Firework(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height/2;

for(let i=0;i<50;i++){

particles.push({

x:this.x,

y:this.y,

dx:(Math.random()-0.5)*6,

dy:(Math.random()-0.5)*6,

life:80

});

}

}

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(p.x,p.y,2,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*60+30},100%,60%)`;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.dy+=0.02;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(()=>{

new Firework();

},1500);