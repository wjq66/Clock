window.onload = function () {
    var oCan = document.getElementById('clock-canv');
    var oContext = oCan.getContext("2d");
    var s = new Date().getSeconds() * 6;
    /*思路,分析结构。刻度，圆圈+时针+分针+中心小圆圈+刻度渐变*/


    drawClock(s);

    setInterval(function () {
        drawClock(s);
        s = s == 360 ? 0 : ++s;
    }, 60000 / 360);

    function drawClock(s) {
        var nTime = new Date();
        var h = nTime.getHours();
        var m = nTime.getMinutes();


        oContext.clearRect(0, 0, 300, 300); /*擦除所有*/


        /*绘制刻度*/
        oContext.strokeStyle = "#999"; /*设置笔触的颜色*/
        oContext.lineWidth = 0.5; /*设置线条的宽度*/
        for (var i = 0; i < 360; i++) {
            oContext.save();
            oContext.beginPath(); /*开始路径*/
            oContext.translate(150, 150); /*去到画布的中心*/
            oContext.rotate(i * 1 * Math.PI / 180);
            oContext.moveTo(0, -125); /*移动笔触*/
            oContext.lineTo(0, -140);

            oContext.closePath();
            oContext.stroke(); /*绘制已经定义的路径,描边*/
            oContext.restore(); /*保存之前保存过的路径和属性*/
        }

        /*画圈*/
        oContext.strokeStyle = "#ccc"; /*设置笔触的颜色*/
        oContext.lineWidth = 1; /*设置线条的宽度*/
        oContext.beginPath(); /*开始路径*/
        /*画圆*/
        oContext.arc(150, 150, 100, 0, 360 * Math.PI / 180);
        oContext.stroke();
        oContext.closePath();
        oContext.stroke(); /*描边*/
        oContext.save();

        /*画时针*/
        oContext.strokeStyle = "#fff"; /*设置笔触的颜色*/
        oContext.lineWidth = 4; /*设置线条的宽度*/
        oContext.beginPath(); /*开始路径*/
        oContext.translate(150, 150);
        oContext.rotate(h * 30 * Math.PI / 180);
        oContext.moveTo(0, 0); /*移动笔触*/
        oContext.lineTo(0, -60);
        oContext.closePath();
        oContext.stroke();
        oContext.restore() /*保存之前保存过的路径和属性*/
        oContext.save();

        /*画分针*/
        oContext.strokeStyle = "#fff"; /*设置笔触的颜色*/
        oContext.lineWidth = 3; /*设置线条的宽度*/
        oContext.beginPath(); /*开始路径*/
        oContext.translate(150, 150);
        oContext.rotate(m * 6 * Math.PI / 180);
        oContext.moveTo(0, 0); /*移动笔触*/
        oContext.lineTo(0, -80);
        oContext.closePath();
        oContext.stroke();
        oContext.restore() /*保存之前保存过的路径和属性*/
        oContext.save();

        /*画秒针*/
        var height = 14 * Math.sin(Math.PI / 3);
        oContext.fillStyle = "#fff"; /*设置笔触的颜色*/

        oContext.beginPath(); /*开始路径*/
        oContext.translate(150, 150);
        oContext.rotate(s * 1 * Math.PI / 180);
        oContext.moveTo(0, -105 - height);
        oContext.lineTo(-7, -105); /*移动笔触*/
        oContext.lineTo(7, -105);
        oContext.closePath();
        oContext.fill();
        oContext.restore() /*保存之前保存过的路径和属性*/
        oContext.save();

        /*画中心的空圆*/
        oContext.strokeStyle = "#fff"; /*设置笔触的颜色*/
        oContext.fillStyle = "#008171";
        oContext.lineWidth = 6; /*设置笔触的大小*/
        oContext.beginPath(); /*开始新路径*/
        oContext.arc(150, 150, 4, 0, 360 * Math.PI / 100);
        oContext.closePath();
        oContext.stroke(); /*绘制已经定义的李静 -- 描边*/
        oContext.fill();
        oContext.save(); /*保存当前环境的状态*/

        /*绘制渐变*/
        oContext.strokeStyle = "#fff"; /*设置笔触的颜色*/
        oContext.lineWidth = 0.5; /*设置线条的宽度*/

        for (var i = 0; i < 100; i++) {
            oContext.save();
            oContext.strokeStyle = 'rgba(255,255,255,'+(100-i)/100+')';
            oContext.beginPath(); /*开始路径*/
            oContext.translate(150, 150); /*去到画布的中心*/
            oContext.rotate((s - i) * 1 * Math.PI / 180);
            oContext.moveTo(0, -125); /*移动笔触*/
            oContext.lineTo(0, -140);
            oContext.closePath();
            oContext.stroke(); /*绘制已经定义的路径,描边*/
            oContext.restore(); /*保存之前保存过的路径和属性*/
        }
    }

}