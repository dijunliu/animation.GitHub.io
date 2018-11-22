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

function play(){
    if(startS.pause && !beginPlay){
        startS.currentTime = 0;
        startS.loop = true;
        startS.play();
        beginPlay = true;
    }
}

var keycode = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    COMMAND: 15,
    SHIFT: 16,
    CONTROL: 17,
    ALTERNATE: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    NUMPAD: 21,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,

    //arrows
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    INSERT: 45,
    DELETE: 46,

    //numbers
    NUMBER_0: 48,
    NUMBER_1: 49,
    NUMBER_2: 50,
    NUMBER_3: 51,
    NUMBER_4: 52,
    NUMBER_5: 53,
    NUMBER_6: 54,
    NUMBER_7: 55,
    NUMBER_8: 56,
    NUMBER_9: 57,

    //letters
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,

    LEFT_WINDOW_KEY: 91,
    RIGHT_WINDOW_KEY: 92,
    SELECT_KEY: 93,

    //number pad
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_ADD: 107,
    NUMPAD_ENTER: 108,
    NUMPAD_SUBTRACT: 109,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,

    //function keys
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,

    NUM_LOCK: 144,
    SCROLL_LOCK: 145,

    //punctuation
    SEMICOLON: 186,
    EQUAL: 187,
    COMMA: 188,
    MINUS: 189,
    PERIOD: 190,
    SLASH: 191,
    BACKQUOTE: 192,
    LEFTBRACKET: 219,
    BACKSLASH: 220,
    RIGHTBRACKET: 221,
    QUOTE: 222
};



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
                    // if(downS.currentTime > 0.1){
                    //     downS.currentTime = 0;
                    //     downS.pause();
                    // }
                    speed = 0.005;
                    isFire = 'start';
                    fireSv = 0.01;

                    //beginPlay判断是否第一次按下
                    //play();  待解决的问题

                    // if(startS.currentTime > 1.3){
                    //     console.log(startS.duration);
                    //     startS.currentTime = 0;
                    //     startS.play();
                    // }
                    break;
                case keycode.DOWN:
                    speed = -0.05;
                    break;
                case keycode.LEFT:
                    ball.rotation += -Math.PI/10;
                    break;
                case keycode.RIGHT:
                    ball.rotation += Math.PI/10;
                    break;
            }
        },false)
        window.addEventListener('keyup',function (event) {
            switch (event.keyCode) {
                case keycode.UP:
                    speed = 0;
                    isFire = 'down';
                    fireSv = -0.01;
                    beginPlay = false;
                    // console.log(1);
                    startS.pause();
                    //downS.play();
                    break;
                case keycode.DOWN:
                    speed = 0;
                    break;
            }
        },false)
    }
}