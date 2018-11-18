function Ball(radius,color) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.rotation = Math.PI;
    this.color = color?color:"#ff0000";
    this.scaleX = 0.3;
    this.scaleY = 0.3;
    this.radius = radius?radius:'50';
    this.lineWidth = 3;
}


Ball.prototype.draw = function (context) {
    context.save();
    context.fillStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.beginPath();

    context.arc(0,0,this.radius,0,Math.PI*2,false);

    // context.drawImage(this.img,0,0,this.img.width,this.img.height,0,0,this.img.width/5,this.img.height/5);
    // context.restore();
    // context.save();
    // context.translate(this.x-imgF.width/200,this.y-imgF.height/200);
    // context.rotate(this.rotation+Math.PI);
    // context.drawImage(imgF,0,0,imgF.width,imgF.height,0,0,imgF.width/100,imgF.height/100);

    // context.moveTo(0,100);
    // context.lineTo(100,25);
    // context.lineTo(50,25);
    // context.lineTo(50,-100);
    // context.lineTo(-50,-100);
    // context.lineTo(-50,-25);
    // context.lineTo(-50,25);
    // context.lineTo(-100,25);
    // context.lineTo(0,100);


    context.stroke();
    context.fill();
    context.restore();
}