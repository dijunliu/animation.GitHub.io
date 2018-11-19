window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    friction = 0.95; //摩擦力（反比）
    gravity = 0.01;
    spring =0.01; //弹簧力度
    ballsnum = 3;

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
    // balls = [];
    // ballnum = 80;
    // while(ballnum --){
    //     balls.push(new Ball(20));
    // }


    //双向弹动
    balls = [];
    for(var ball,i=0;i<ballsnum;i++){
        ball = new Ball();
        ball.x = Math.random()*canvas.width;
        ball.y = Math.random()*canvas.height;
        balls.push(ball);
    }

    mouse = new utils.capturemouse(canvas);
    drawFrame();
}