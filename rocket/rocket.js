function Rocket(radius, color) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.rotation = 0;
    this.color = color?color:"#ffff00";
    this.scaleX = 0.5;
    this.scaleY = 0.5;
    this.fscaleX = 0;
    this.fscaleY = 0;
    this.radius = radius?radius:'50';
    this.lineWidth = 3;
    this.img = img;
}


Rocket.prototype.draw = function (context) {

    context.save();
    if(isFire === 'start'){
        context.translate(this.x,this.y);
        context.rotate(this.rotation);
        if((0.5 - this.fscaleX) > 0 && (0.5 - this.fscaleY) > 0){
            this.fscaleX += fireSv*0.9;
            this.fscaleY += fireSv*0.9;
            console.log(this.fscaleX);
            console.log(fireSv);
        }
        context.scale(this.fscaleX,this.fscaleY);

        //context.drawImage(imgF,-imgF.width/2*this.fscaleX,0);
        context.drawImage(imgF,-imgF.width/2,87);
    }else if(isFire === 'down'){
        context.translate(this.x,this.y);
        context.rotate(this.rotation);
        if(this.fscaleX > 0 && this.fscaleY > 0){
            this.fscaleX += fireSv*0.1;
            this.fscaleY += fireSv*0.5;
        }else{
            fireSv = 0;
            this.fscaleX = 0;
            this.fscaleY = 0;
            isFire = undefined;
        }
        context.scale(this.fscaleX,this.fscaleY);
        context.drawImage(imgF,-imgF.width/2,44*1/this.fscaleY);
    }
    context.restore();

    context.save();
    context.fillStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);

    //context.beginPath();
    //context.arc(0,0,this.radius,0,Math.PI*2,false);

    context.drawImage(this.img,-img.width/2,-img.height/2);
    context.restore();
}