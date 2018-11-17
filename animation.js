window.onload = function () {
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    animate.start();
}

animate = {
    start:function () {

        mouse = utils.capturemouse(canvas);
        utils.capturekey();
        angle =0;

        var arrow = new Arrow();
        arrow.x = canvas.width/2;
        arrow.y = canvas.height/2;
        // (function drawFrame(){
        //     window.requestAnimationFrame(drawFrame);
        //     var dx = mouse.x - arrow.x,
        //         dy = mouse.y - arrow.y;
        //     context.clearRect(0,0,canvas.width,canvas.height);
        //     arrow.rotation = Math.atan2(dy,dx);
        //     arrow.draw(context);
        //
        // }());


        (function drawFrame(){
            //window.requestAnimationFrame(drawFrame);
            context.beginPath();
            context.moveTo(angle,Math.sin(angle/10)*10+canvas.height/2);
            for(var i = 0;i<Math.PI*80;i++){
                context.lineTo(angle+i,Math.sin((angle+i)/10)*100+canvas.height/2);
            }
            context.stroke();
            angle ++;
            context.clearRect(0,0,canvas.width,canvas.height);
        }());
        // context.lineWidth = '3';
        // function drawFrame(){
        //     window.setTimeout(drawFrame,10);
        //     context.clearRect(0,0,canvas.width,canvas.height);
        //     context.beginPath();
        //     context.moveTo(0,Math.sin(angle/10)*10+canvas.height/2);
        //     for(var i = 0;i<canvas.width;i++){
        //         context.lineTo(i,Math.sin((angle+i)/10)*100+canvas.height/2);
        //     }
        //     context.stroke();
        //     angle ++;
        //
        // }
        // drawFrame();
    },
    drawcircle(x,y,r){
        context.beginPath();
        context.arc(x,y,r,0,Math.PI*2,false);
        context.fill();
    }
}