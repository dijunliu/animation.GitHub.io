function Starts(scale) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.rotation = 0;
    this.scale = scale;
    this.rotateV = 0;
    this.randomA = 0;
}

Starts.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    // var gradient = context.createRadialGradient(0,0,10,0,0,30);
    // gradient.addColorStop(0, 'rgb(255,0,0)');
    // gradient.addColorStop(0.5, 'rgb(0,255,0)');
    // gradient.addColorStop(1, 'rgb(0,0,255)');
    // context.fillStyle = gradient;
    context.arc(0,0,30,0,Math.PI*2,false);
    context.fill();
    context.restore();
}