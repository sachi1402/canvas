const canvas = document.getElementById("can");
let ctx= canvas.getContext("2d");
let chek= 0;

window.addEventListener('load',e=>{
    createcanvas();
    drw();
});
function drw(){
  
    canvas.addEventListener("mousedown"||"touchstart",e=>{startdraw(e)});
    canvas.addEventListener("mousemove"||"touchmove",e=>{chek&&draw(e)});
    canvas.addEventListener("mouseup"||"touchend",e=>{stopdraw(e)});
}
function createcanvas(){
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    
}   

function draw(event){
   x =event.clientX;
   y= event.clientY;
   ctx.lineTo(x,y);
   ctx.moveTo(x,y);
   ctx.stroke();
}
function startdraw(event){
    pensize();
    draw(event);
    ctx.beginPath();
    chek=1;
    
}
function stopdraw(event){
    ctx.beginPath(); 
    chek =0;
    
}

function eraze(event){
    ctx.lineWidth = 15;
    ctx.strokeStyle = "white"; 
}
function pen(event){
    ctx.lineWidth=1;
    ctx.strokeStyle = "black";
    
}
function setcolor(){
    let shade = document.getElementById('clor');
    console.log(shade.value);
    ctx.strokeStyle= shade.value;
}
function pensize(){
    let sz = document.getElementById('sz');
    console.log(sz.value);
    ctx.lineWidth= sz.value;
    ctx.lineCap="round";
}