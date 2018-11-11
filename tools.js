tools = {
    init:function(){
        tools.canvas = document.getElementById('animatecanvas');
        tools.importPointc = document.getElementById('importPoint');
        tools.restartc = document.getElementById('restart');
        mouse = utils.capturemouse(tools.canvas);
        tools.centerX = tools.canvas.width/2;
        tools.centerY = tools.canvas.height/2;
        tools.context = tools.canvas.getContext('2d');
        tools.context.imageSmoothingEnabled = true;
        tools.context.fillStyle = '#fff';
        tools.context.strokeStyle = '#8588ff';
        tools.context.lineWidth = 1;
        tools.points = [];
        tools.selectPoint = [];
        tools.drawline();
        tools.importPointc.addEventListener('click',tools.importpoint,false);
        tools.restartc.addEventListener('click',tools.restart,false);
        tools.canvas.addEventListener('mousedown',tools.checkpoint,false);
        //tools.animate();
    },
    drawline:function () {
        tools.points = [];
        for(var i= 30;i<600;i+=30){
            if(i == tools.centerX){
                tools.context.save();
                tools.context.strokeStyle = '#ff7f43';
                tools.context.beginPath();
                tools.context.moveTo(i,0);
                tools.context.lineTo(i,tools.canvas.height);
                tools.context.moveTo(0,i);
                tools.context.lineTo(tools.canvas.width,i);
                tools.context.stroke();
                tools.context.restore();
            }else{
                tools.context.beginPath();
                tools.context.moveTo(i,0);
                tools.context.lineTo(i,tools.canvas.height);
                    tools.context.moveTo(0,i);
                tools.context.lineTo(tools.canvas.width,i);
                tools.context.stroke();
            }
            for(var j = 30;j<=i;j+=30){
                if(i == j){
                    tools.points.push({x:j,y:i,isSelect:false});
                    tools.context.beginPath();
                    tools.context.arc(j,i,5,0,Math.PI*2,false);
                    tools.context.stroke();
                    tools.context.fill();
                }else{
                    if (j == tools.centerX || i == tools.centerX){
                        tools.points.push({x:j,y:i});
                        tools.points.push({x:i,y:j});
                        tools.context.save();
                        tools.context.strokeStyle = '#ff7f43';
                        tools.context.beginPath();
                        tools.context.arc(j,i,5,0,Math.PI*2,false);
                        tools.context.stroke();
                        tools.context.fill();
                        tools.context.beginPath();
                        tools.context.arc(i,j,5,0,Math.PI*2,false);
                        tools.context.stroke();
                        tools.context.fill();
                        tools.context.restore();
                    }else{
                        tools.points.push({x:j,y:i});
                        tools.points.push({x:i,y:j});
                        tools.context.beginPath();
                        tools.context.arc(j,i,5,0,Math.PI*2,false);
                        tools.context.stroke();
                        tools.context.fill();
                        tools.context.beginPath();
                        tools.context.arc(i,j,5,0,Math.PI*2,false);
                        tools.context.stroke();
                        tools.context.fill();
                    }
                }
            }
        }
    },
    checkpoint:function () {
        var sPoint = tools.selectPoint;
        tools.context.save();
        tools.context.strokeStyle = '#f00';
        tools.context.fillStyle = '#f00';
        for (var i=0;i < tools.points.length;i++){
            var point = tools.points[i];
            if(Math.sqrt(Math.pow(point.x-mouse.x,2)+Math.pow(point.y-mouse.y,2)) <= 5){
                point.isSelect = true;
                tools.context.save();
                tools.context.beginPath();
                tools.context.arc(point.x,point.y,5,0,Math.PI*2,false);
                tools.context.fill();
                tools.context.restore();
                sPoint.push(point);
            }
        }
        tools.context.beginPath();
        if(sPoint.length>1){
            tools.context.moveTo(sPoint[0].x,sPoint[0].y);
            for (var i=1;i < sPoint.length;i++){
                tools.context.lineTo(sPoint[i].x,sPoint[i].y);
            }
        }
        tools.context.stroke();
        tools.context.restore();
    },
    animate:function () {
        tools.checkpoint();
        tools.context.clearRect(0,0,tools.canvas.width,tools.canvas.height);
        tools.drawline();
        tools.checkpoint();
        window.requestAnimationFrame(tools.animate);
    },
    importpoint:function () {
        if(tools.selectPoint.length > 1){
            var sPoint = tools.selectPoint;
            var x = sPoint.x - tools.centerX;
            var y = sPoint.y - tools.centerY;
            console.log("save();");
            console.log("beginPath();");
            console.log("moveTo("+(sPoint[0].x - tools.centerX)+","+(sPoint[0].y - tools.centerY)+");");
            for (var i=1;i < sPoint.length;i++) {
                console.log("lineTo(" +(sPoint[i].x - tools.centerX)+ ","
                    +(sPoint[i].y - tools.centerY)+ ");");
            }
            console.log("stroke();");
            console.log("restore();");
        }
    },
    restart:function () {
        tools.context.clearRect(0,0,tools.canvas.width,tools.canvas.height);
        tools.drawline();
        tools.selectPoint = [];
    }
}
