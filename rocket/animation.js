
function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    //audio control
    // if(startSPlay){
    //     startS.play();
    // }


    context.clearRect(0,0,canvas.width,canvas.height);


    //draw meteor animation
    for(var i=0;i<meteors.length;i++){
        meteors[i].vx = 0;
        meteors[i].vy = 0;
        meteors[i].ax = 0;
        meteors[i].ay = 0;
        meteors[i].ax = Math.cos(meteors[i].rotation + Math.PI*4/5)*meteorSpeed*meteors[i].randomA;
        meteors[i].ay = Math.sin(meteors[i].rotation + Math.PI*4/5)*meteorSpeed*meteors[i].randomA;
        meteors[i].vx += meteors[i].ax;
        meteors[i].vy += meteors[i].ay;
        meteors[i].x += meteors[i].vx;
        meteors[i].y += meteors[i].vy;
        meteors[i].draw(context);
    }
    //draw rocket animation
    if(speed > 0){
        ball.ax += Math.cos(ball.rotation-Math.PI/2)*speed/100;
        ball.ay += Math.sin(ball.rotation-Math.PI/2)*speed/100;
    }else{
        ball.ax = 0;
        ball.ay = 0;
    }
    ball.vx +=ball.ax;
    ball.vx *= friction;
    ball.x += ball.vx;

    ball.vy += ball.ay;
    ball.vy *= friction;
    ball.vy += gravity/2;
    ball.y += ball.vy;
    ball.draw(context);

    //draw mete animation
    for(var i=0;i<metes.length;i++){
        metes[i].y += gravity+0.1;
        metes[i].rotation += metes[i].rotateV;
        metes[i].draw(context);
    }
}
