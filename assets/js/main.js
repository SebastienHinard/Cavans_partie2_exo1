var c = document.getElementById('glace');
var ctx = c.getContext('2d');
// grille
// ctx.strokeStyle="lightgrey"
// for(var x=10; x<390; x+=10){
//     ctx.moveTo(x,0);
//     ctx.lineTo(x,400);
// }
// for(var y=10; y<390; y+=10){
//     ctx.moveTo(0,y);
//     ctx.lineTo(400,y);
// }
// ctx.stroke();
//decor
ctx.fillStyle="lightblue";
for(var x=10; x<380; x+=40){
    for(var y=10; y<380; y+=40){
        ctx.fillRect(x,y,20,20);
    }
}
//cornet
ctx.fillStyle="#aa6522";
ctx.moveTo(200,360);
ctx.lineTo(140,200);
ctx.lineTo(260,200);
ctx.lineTo(200,360);
ctx.fill();
//boule de glace
ctx.beginPath();
ctx.fillStyle="#8a0908"
ctx.moveTo(140,200);
ctx.quadraticCurveTo(200,80,260,200);
ctx.fill();
//garniture
ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(160,180,10,0,Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="yellow";
ctx.arc(240,180,10,0,Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(200,180,10,0,Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(180,150,10,0,Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="green";
ctx.arc(220,150,10,0,Math.PI*2);
ctx.fill();
//details cornet
ctx.strokeStyle="#8a0908"
var x1=150, x2=250, y=210;
for (i=0; i<14; i++){
    ctx.moveTo(x1,y);
    ctx.lineTo(x2,y);
    ctx.stroke();
    x1+=4;
    x2-=4;
    y+=10;
}
