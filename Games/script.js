var timer=30;
var score =0;
var hitvalint=0;
function makebubble(){
    var clutter ="";

for(var i=1;i<=168;i++){
        var rn = Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
  var timeint=  setInterval(function(){
    if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
        clearInterval(timeint);
        document.querySelector("#pbtm").innerHTML="<h1>Game Over</h11>"
        +"<br>Your Score is<br>"+ score
        }
    
  },1000)

}
function getnewhit(){
    hitvalint= Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitvalint;
}
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednumber= Number(dets.target.textContent);
   if(clickednumber==hitvalint){
    increasescore();
    makebubble();
    getnewhit();
   }
})
makebubble();
runtimer();
getnewhit();



