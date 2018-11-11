function Arrow() {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.color = "#ffff00";
}


Arrow.prototype.draw = function (context) {
    context.save();
    context.fillStyle = this.color;
    context.translate(this.x,this.y);
    context.rotate(this.rotation-Math.PI/2);
    context.beginPath();
    context.moveTo(0,100);
    context.lineTo(100,25);
    context.lineTo(50,25);
    context.lineTo(50,-100);
    context.lineTo(-50,-100);
    context.lineTo(-50,-25);
    context.lineTo(-50,25);
    context.lineTo(-100,25);
    context.lineTo(0,100);
    context.stroke();
    context.fill();
    context.restore();
}