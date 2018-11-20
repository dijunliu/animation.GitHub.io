window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    isFire = undefined;
    fireSv = 0;
    firedownSv = 0;
    friction = 0.98;
    gravity = 0.05;
    img = new Image();
    img.src = 'rocketBody.png';

    imgF = new Image();
    imgF.src = 'rocketFire.png';
    ball = new Rocket();
    ball.x = canvas.width/2;
    //ball.y = canvas.height/2;
    ball.y = 0;
    //mouse = new utils.capturemouse(canvas);
    speed = 0;
    utils.capturekey();
    img.onload = drawFrame();

}