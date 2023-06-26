   let can = document.getElementById("canvas"), ctx = can.getContext("2d"),dy1 = 400;dy2 = 400;
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    can.style.position="absolute";
    can.style.background = "#10D9EF";
    can.addEventListener("mousemove",(e)=>{
         e.x < can.width/2 ? dy1 = e.y:dy2 = e.y;
        
    })

    window.addEventListener("keydown",(e)=>{
        //     if(e.keyCode === 87){
        //     dy1 -= 25;
        // }
        // if(e.keyCode === 83){
        //     dy1 += 25;
        // }
        // if(e.keyCode === 38){
        //     dy2 -= 25;
        // }
        // if(e.keyCode === 40){
        //     dy2 += 25;
        // }        
    })



class player{
    constructor(){
        // this.w = w;
        // this.c = c;

    }
    draw(ctx,d,dy){
     this.d = d;
     this.dy = dy;
     ctx.fillStyle = 'red';
     ctx.fillRect(d - 90,this.dy - 60,20,120);
 
    }
}
class circle{
    constructor(){
    this.x = can.width/2 -6 ;
    this.y = Math.random() * can.height;
    this.arr =[];
    this.spd = 10;
    this.vx = this.spd * 1;
    this.vy = this.spd * 1;

}
    draw(ctx){
        // for(let i = 0 ;i < 10 ;i++){
    ctx.beginPath();
    ctx.fillStyle = "#0e737e";
    ctx.arc(this.x,this.y,10,Math.PI *2 ,false)
    ctx.fill();
    ctx.strokeStyle="white";
    ctx.lineWidth="2"
    ctx.stroke();
    ctx.closePath();
        // }
    }
    update(ctx){
        this.x +=this.vx;
        this.y +=this.vy;
       if(this.x + 7 >can.width || this.x - 7 < 0){
        this.vx = -this.vx/2;

    }
        if(this.y + 7 >can.height || this.y - 7 < 0){
        this.vy = -this.vy
        
      }
    //   this.x > can.width - 90 ? console.log("player 2 dead") :console.log(false); 
       if (this.x <  97) {
         if (this.y >= dy1 - 60 && this.y <= dy1 + 60) {
            this.vx = -this.vx;
         }
        
    }
    if (this.x > can.width - 97 ) {
         if (this.y >= dy2 - 60 && this.y <= dy2 + 60) {
            this.vx = -this.vx;

         }
        
    }
    if (this.x <  80 ) {
        document.getElementById("pts2").innerHTML = +document.getElementById("pts2").innerHTML + 1;
        this.x =can.width/2 -6 ;
    }
    if (this.x > can.width - 80) {
        document.getElementById("pts1").innerHTML = +document.getElementById("pts1").innerHTML + 1;
        this.x =can.width/2 -6 ;
    }

      this.arr.push(this.draw(ctx))
    }
}
let circles = new circle(), playerOne = new player(),playerTwo = new player();
setTimeout(()=>{
    let animation = ()=>{
    ctx.clearRect(0,0,can.width,can.height)
    requestAnimationFrame(animation);
        circles.update(ctx)
        playerOne.draw(ctx,180,dy1)
        //  dy2 = circles.y;
        playerTwo.draw(ctx,can.width,dy2)
}
animation();
},100)


