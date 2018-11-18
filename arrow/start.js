window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    arrow = new Ball();
    arrow.x = canvas.width/2;
    arrow.y = canvas.height/2;
    mouse = new utils.capturemouse(canvas);
    drawFrame();
}