window.onload = function () {
    animate.start();
}

animate = {
    start:function () {
        var canvas =  document.getElementById('animatecanvas');
        var context = canvas.getContext('2d');
        mouse = utils.capturemouse(canvas);
        canvas.addEventListener('mousedown', function () {
            console.log("x= "+mouse.x+" ,y= "+mouse.y);
        });
        touch = utils.captureTouch(canvas);
        canvas.addEventListener('touchstart', function () {
            console.log("x= "+touch.x+" ,y= "+touch.y+" isPressed:"+touch.isPressed);
        })
    }
}