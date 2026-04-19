function openInvitation(){

document.getElementById("gate").classList.add("gate-open")

setTimeout(()=>{

document.getElementById("gate").style.display="none"

},1500)

document.getElementById("music").play()

createHearts()
startFirework()

}

function toggleMusic(){

let m=document.getElementById("music")

if(m.paused){
m.play()
}else{
m.pause()
}

}

/* HEART */

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize="16px";
heart.style.animationDuration=(5+Math.random()*4)+"s"
document.body.appendChild(heart)

setTimeout(()=>heart.remove(),9000)

},1000)

}

/* FIREWORK */

const canvas=document.getElementById("fireworks")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

function startFirework(){

setInterval(()=>{

for(let i=0;i<60;i++){

particles.push({

x:canvas.width/2,
y:canvas.height/2,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:60

})

}

},800)

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach((p,i)=>{

p.x+=p.vx
p.y+=p.vy
p.life--

ctx.beginPath()
ctx.arc(p.x,p.y,2,0,Math.PI*2)
ctx.fillStyle="gold"
ctx.fill()

if(p.life<=0)particles.splice(i,1)

})

requestAnimationFrame(draw)

}

draw()

/* NHŨ VÀNG */

function createSparkle(){

setInterval(()=>{

let s=document.createElement("div")

s.className="sparkle"

s.style.left=Math.random()*100+"vw"
s.style.animationDuration=(3+Math.random()*4)+"s"

document.getElementById("gate").appendChild(s)

setTimeout(()=>s.remove(),7000)

},120)

}

createSparkle()

/* CHIBI */

const chibiPositions=[

{top:145,left:40},
{top:400,left:40},
]

chibiPositions.forEach((pos,i)=>{

let img=document.createElement("img")

img.src="anh "+(i+1)+".PNG"

img.className="chibi"

img.style.top=pos.top+"px"
img.style.left=pos.left+"vw"

document.getElementById("chibiContainer").appendChild(img)

})
/* HIỆU ỨNG HIỆN DẦN KHI CUỘN TRANG */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Khoảng cách để kích hoạt hiệu ứng

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", reveal);

// Chạy thử lần đầu khi tải trang
reveal();
const modal = document.getElementById("qrModal");
const modalImg = document.getElementById("imgFull");
const downloadBtn = document.getElementById("downloadBtn");

document.querySelectorAll('.qr-img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        downloadBtn.href = this.src;
    }
});

document.querySelector(".close-modal").onclick = () => modal.style.display = "none";