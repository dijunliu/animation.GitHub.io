window.onload = function () {

    //初始化环境
    loader.init();

    //音频加载
    windS = loader.loadSound('wind.mp3');
    downS = loader.loadSound('down.mp3');
    startS = loader.loadSound('start.mp3');
    startSPlay = false;
    windS.loop = true;
    windS.play();
    //startS.play();

    //游戏背景
    bgcanvas = document.getElementById('animateBg');
    bgContext = bgcanvas.getContext('2d');
    bgImg = loader.loadImg('spaceBg.png');


    //火箭数据初始化
    canvas =  document.getElementById('animatecanvas');
    context = canvas.getContext('2d');
    isFire = undefined;
    fireSv = 0;
    friction = 0.99;
    gravity = 0.005;

    img = loader.loadImg('rocketBody.png');
    imgF = loader.loadImg('rocketFire.png');

    ball = new Rocket();
    ball.x = canvas.width/2;
    //ball.y = canvas.height/2;
    ball.y = 0;
    //mouse = new utils.capturemouse(canvas);
    speed = 0;
    utils.capturekey();

    //陨石数据初始化
    meteNum = 25;
    metes = [];
    meteImg0 = loader.loadImg('img/Meteor0.png');
    meteImg1 = loader.loadImg('img/Meteor1.png');
    meteImg2 = loader.loadImg('img/Meteor2.png');
    for(var mete,i=0;i<meteNum;i++){
        var randomImgNum = Math.ceil(Math.random()*3-1);
        mete = new Mete(window['meteImg'+ randomImgNum],Math.random()*0.04);
        mete.x = Math.random()*canvas.width;
        mete.y = -Math.random()*1200;
        mete.rotation =Math.PI/Math.random();
        if(Math.random()>0.5){
            mete.rotateV =Math.PI/((Math.random()*2+1)*400);
        }else{
            mete.rotateV =-Math.PI/((Math.random()*2+1)*400);
        }
        metes.push(mete);
    }
    for(var i=0;i<metes.length;i++){
        console.log(metes[i].img.src);
    }

    //流星初始化
    function  meteorsAnimate(){
        setTimeout(meteorsAnimate,4000);
        if(typeof meteors != "undefined"){
            console.log("meteors[0].vx:"+meteors[0].vx+"   meteors[0].ax:"+meteors[0].ax);
        }
        meteors = [];
        meteorNum = Math.random()*9+5;
        meteImg3 = loader.loadImg('img/Meteor3.png');
        for(var meteor,i=0;i<meteorNum;i++){
            meteor = new Mete(meteImg3,Math.random()/3);
            meteor.x = canvas.width +200+800*Math.random();
            meteor.y = -800*Math.random();
            meteor.randomA = Math.random()+0.5;
            meteors.push(meteor);
        }
        meteorSpeed = 2;
    }
    meteorsAnimate();

    //图片加载完毕，开始动画
    loader.onload = function (){
        bgContext.drawImage(bgImg,0,300,bgImg.width,bgImg.height,0,0,bgImg.width,bgImg.height);
        drawFrame();
    }

}