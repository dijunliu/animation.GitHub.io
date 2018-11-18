function springball(ballA,targetX,targetY) {
    var dx = targetX - ballA.x;
    var dy = targetY - ballA.y;
    ballA.ax = dx/10;
    ballA.ay = dy/10;


    ballA.vx +=ballA.ax;
    ballA.vx *=friction;
    ballA.x +=ballA.vx;

    ballA.vy +=ballA.ay;
    ballA.vy *=friction;
    ballA.vy +=gravity;
    ballA.y +=ballA.vy;
}

function drawSpringBall(ball,i) {
    if(i === 0){
        springball(ball,mouse.x,mouse.y);
        context.moveTo(mouse.x,mouse.y);
    }else{
        var ballB = balls[i-1];
        springball(ball,ballB.x,ballB.y);
        context.moveTo(ballB.x,ballB.y);
    }
    context.lineTo(ball.x,ball.y);
    context.stroke();
    ball.draw(context);
}

function  applyHandle(handle) {
    if(Math.sqrt(Math.pow(handle.x-mouse.x,2)+Math.pow(handle.y-mouse.y,2))
        <= handle.radius){
        handle.x = mouse.x;
        handle.y = mouse.y;
    }
    var dx = handle.x - ball.x;
    var dy = handle.y - ball.y;
    ball.vx +=dx*spring;
    ball.vy +=dy*spring;
    context.moveTo(handle.x,handle.y);
    context.lineTo(ball.x,ball.y);
    context.stroke();
    handle.draw(context);
}

function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0,0,canvas.width,canvas.height)
    // angle += Math.PI/90;
    // ball.scaleY = Math.sin(angle)+1;
    // ball.scaleX = Math.sin(angle)+1;
    // ball.x = Math.sin(angle)*200 + canvas.width/2;
    // ball.y = Math.cos(angle)*100 + canvas.height/2;

    // //缓动追随鼠标
    // var dx = mouse.x - ball.x;
    // var dy = mouse.y - ball.y;
    // var angle = Math.atan2(dy,dx);
    // var speed = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    // ball.vx = Math.cos(angle)*speed/10;
    // ball.vy = Math.sin(angle)*speed/10;
    //
    //
    // //缓动追随鼠标简化
    // var dx = mouse.x - ball.x;
    // var dy = mouse.y - ball.y;
    // ball.vx = dx/10;
    // ball.vy = dy/10;
    //
    // ball.x +=ball.vx;
    // ball.y +=ball.vy;
    //
    // //缓动旋转至700度
    // var dr = Math.PI*8-ball.rotation;
    // ball.rotation += dr/10;
    //
    // //缓动变大
    // var sr = 5 - ball.scaleX;
    // ball.scaleX += sr/100;
    // ball.scaleY += sr/100;

    //弹动追随鼠标
    // var dx = mouse.x - ball.x;
    // var dy = mouse.y - ball.y;
    // var angle = Math.atan2(dy,dx);
    // var speed = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    // ball.ax = Math.cos(angle)*speed/100;
    // ball.ay = Math.sin(angle)*speed/100;


    //弹动追随鼠标简化
    // var dx = mouse.x - ball.x;
    // var dy = mouse.y - ball.y;
    // ball.ax = dx/50;
    // ball.ay = dy/50;
    //
    //
    // ball.vx +=ball.ax;
    // ball.vx *=0.95;
    // ball.x +=ball.vx;
    //
    // ball.vy +=ball.ay;
    // ball.vy *=0.95;
    // ball.y +=ball.vy;

    //链式弹性ball
    // balls.forEach(drawSpringBall);


    //多点控制ball弹动
    handleBall.forEach(applyHandle);
    ball.vx *=friction;
    ball.x +=ball.vx;

    ball.vy *=friction;
    //ball.vy +=gravity;
    ball.y +=ball.vy;
    ball.draw(context);
}
