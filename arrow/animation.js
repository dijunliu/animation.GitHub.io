
function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0,0,canvas.width,canvas.height)
    var x = mouse.x - arrow.x;
    var y = mouse.y - arrow.y;
    arrow.rotation = Math.atan2(y,x);
    arrow.draw(context);
}
