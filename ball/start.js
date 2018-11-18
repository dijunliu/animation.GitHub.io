window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    img = new Image();
    img.src = 'Rocket.png';

    imgF = new Image();
    imgF.src = 'fire.png';
    ball = new Ball();
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    //mouse = new utils.capturemouse(canvas);
    speed = 0;
    utils.capturekey();
    img.onload = drawFrame();

}