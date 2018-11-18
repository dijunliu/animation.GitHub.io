window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    friction = 0.5;
    gravity = 2;
    spring =0.01;


    //多点控制ball弹动
    // handleBall = [];
    // handleBallNum = 3;
    // for (var handle,i=0;i<handleBallNum;i++){
    //     handle = new Ball(50);
    //     handle.x = (Math.random()-0.5)*500+canvas.width/2;
    //     handle.y = (Math.random()-0.5)*500+canvas.height/2;
    //     handleBall.push(handle);
    // }
    //
    // ball = new Ball(50);
    // ball.color = '#123456'
    // ball.x = canvas.width/2;
    // ball.y = canvas.height/2;

    //链式弹性ball
    balls = [];
    ballnum = 80;
    while(ballnum --){
        balls.push(new Rocket(20));
    }

    mouse = new utils.capturemouse(canvas);
    drawFrame();
}