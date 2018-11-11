if(!window.requestAnimationFrame){
    window.requestAnimationFrame = window.webkitRequestAnimationFrame   ||
                                    window.mozRequestAnimationFrame   ||
                                    window.msRequestAnimationFrame  ||
                                    window.oRequestAnimationFrame ||
                                    function(callback){
                                        return window.setTimeout(callback,1000/60);
                                    }


}
if (!window.cancelRequestAnimationFrame) {
    window.cancelRequestAnimationFrame = (window.cancelAnimationFrame ||
                                            window.webkitCancelRequestAnimationFrame ||
                                            window.mozCancelRequestAnimationFrame ||
                                            window.msCancelRequestAnimationFrame ||
                                            window.oCancelRequestAnimationFrame ||
                                            window.clearTimeout);
}

window.utils = {};

var utils = {
    capturemouse:function (element) {
        var mouse={x:null,y:null};
        element.addEventListener('mousedown',function (event) {
            var x, y;
            if(event.pageX || event.pageY){
                x = event.pageX;
                y = event.pageY;
            }else{
                x = event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
                y = event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
            }
            x -=element.offsetLeft;
            y -=element.offsetTop;
            mouse.x = x;
            mouse.y = y;
        },false);
        element.addEventListener('mousemove',function (event) {
            var x, y;
            if(event.pageX || event.pageY){
                x = event.pageX;
                y = event.pageY;
            }else{
                x = event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
                y = event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
            }
            x -=element.offsetLeft;
            y -=element.offsetTop;
            mouse.x = x;
            mouse.y = y;
        },false);
        element.addEventListener('mouseup',function (event) {
            mouse.x = null;
            mouse.y = null;
        },false);
        // element.addEventListener('mouseout',function (event) {
        //     mouse.x = null;
        //     mouse.y = null;
        // },false);
        return mouse;
    },
    captureTouch:function (element) {
        var touch={x:null,y:null,isPressed:false};
        element.addEventListener('touchstart', function (event) {
            touch.isPressed = true;
            var x, y;
            var touch_event = event.touches[0];
            if(touch_event.pageX || touch_event.pageY){
                x = touch_event.pageX;
                y = touch_event.pageY;
            }else{
                x = touch_event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
                y = touch_event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
            }
            x -=element.offsetLeft;
            y -=element.offsetTop;
            touch.x = x;
            touch.y = y;
        },false);
        element.addEventListener('touchmove',function (event) {
            var x, y;
            var touch_event = event.touches[0];
            if(touch_event.pageX || touch_event.pageY){
                x = touch_event.pageX;
                y = touch_event.pageY;
            }else{
                x = touch_event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
                y = touch_event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
            }
            x -=element.offsetLeft;
            y -=element.offsetTop;
            touch.x = x;
            touch.y = y;
        },false);
        element.addEventListener('touchend',function (event) {
            touch.isPressed = false;
            touch.x = null;
            touch.y = null;
        },false)
        return touch;
    },
    capturekey:function () {
        window.addEventListener('keydown',function (event) {
            switch (event.keyCode) {
                case keycode.UP:
                    console.log('up');
                    break;
                case keycode.DOWN:
                    console.log('down');
                    break;
                case keycode.LEFT:
                    console.log('left');
                    break;
                case keycode.RIGHT:
                    console.log('right');
                    break;
            }
        },false)
    }
}