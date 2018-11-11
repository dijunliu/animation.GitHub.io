window.onload = function () {
    tools.init();
}

animate = {
    start:function () {
        var canvas =  document.getElementById('animatecanvas');
        var context = canvas.getContext('2d');
        mouse = utils.capturemouse(canvas);
        utils.capturekey();
        var arrow = new Arrow();

        arrow.x = canvas.width/2;
        arrow.y = canvas.height/2;

        (function drawFrame(){
            window.requestAnimationFrame(drawFrame);
            var dx = mouse.x - arrow.x,
                dy = mouse.y - arrow.y;
            context.clearRect(0,0,canvas.width,canvas.height);
            arrow.rotation = Math.atan2(dy,dx);
            arrow.draw(context);

        }());
    }
}