
function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0,0,canvas.width,canvas.height)
    // angle += Math.PI/90;
    // ball.scaleY = Math.sin(angle)+1;
    // ball.scaleX = Math.sin(angle)+1;
    // ball.x = Math.sin(angle)*200 + canvas.width/2;
    // ball.y = Math.cos(angle)*100 + canvas.height/2;

    //追随鼠标
    // var dx = mouse.x - ball.x;
    // var dy = mouse.y - ball.y;
    // var angle = Math.atan2(dy,dx);
    // var speed = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    // ball.vx = Math.cos(angle)*speed/10;
    // ball.vy = Math.sin(angle)*speed/10;


    if(speed > 0){
        ball.ax += Math.cos(ball.rotation-Math.PI/2)*speed;
        ball.ay += Math.sin(ball.rotation-Math.PI/2)*speed;
    }else{
        ball.ax = 0;
        ball.ay = 0;
    }
    ball.vx +=ball.ax;
    ball.vx *= friction;
    ball.x += ball.vx;

    ball.vy += ball.ay;
    ball.vy *= friction;
    ball.vy += gravity;
    ball.y += ball.vy;
    ball.draw(context);
}
