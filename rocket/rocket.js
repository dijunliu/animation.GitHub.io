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
    context.fillStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);

    //context.beginPath();
    //context.arc(0,0,this.radius,0,Math.PI*2,false);

    context.drawImage(this.img,-img.width/2,-img.height/2);
    context.restore();

    context.save();
    if(isFire){
        context.translate(this.x,this.y);
        context.rotate(this.rotation);
        var dfSv = 0.5 - fireSv;
        if(this.fscaleX < 0.5){
            this.fscaleX += dfSv*0.1;
            this.fscaleY += dfSv*0.1;
        }
        context.scale(this.fscaleX,this.fscaleY);

        context.drawImage(imgF,(-imgF.width/2)*this.fscaleX,(-imgF.height/2+img.height/2+45)*this.scaleX);
    }

    // context.moveTo(0,100);
    // context.lineTo(100,25);
    // context.lineTo(50,25);
    // context.lineTo(50,-100);
    // context.lineTo(-50,-100);
    // context.lineTo(-50,-25);
    // context.lineTo(-50,25);
    // context.lineTo(-100,25);
    // context.lineTo(0,100);
    // context.stroke();
    // context.fill();

    context.restore();
}