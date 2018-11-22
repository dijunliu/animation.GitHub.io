function Mete(img,scale) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.rotation = 0;
    this.scale = scale;
    this.img = img;
    this.rotateV = 0;
    this.randomA = 0;
}
Mete.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.drawImage(this.img,0,0,this.img.width,this.img.height,-this.img.width/2*this.scale,
        -this.img.height/2*this.scale,this.img.width*this.scale,this.img.height*this.scale);
    context.restore();
}