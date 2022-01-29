const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const pixel = 3779.5275590551   //pixels por metro
const ratio = 90.85402786190144 //razão

canvas.height = val(14) //altura bandeira 14 metros
canvas.width = val(20)  //largura bandeira 14 metros

function val(valueInMeters) {
    return (valueInMeters * pixel) / ratio
}

ctx.fillStyle = "#009c3b"; // VERDE
ctx.fillRect(0, 0, val(20), val(14)); // posicionamento e tamanho

//LOSANGO
ctx.beginPath()
let x = 416
let y = 70
let width = 690
let height = 442

ctx.moveTo(x, y)
ctx.lineTo(x - width / 2, y + height / 2)
ctx.lineTo(x, y + height)
ctx.lineTo(x + width / 2, y + height / 2)
ctx.closePath()
ctx.fillStyle = "#ffdf00"; // AMARELO
ctx.fill()


//CIRCULO
ctx.beginPath()
ctx.arc(416, 292, 145, (Math.PI / 180) * 0, (Math.PI / 180) * 360)
ctx.stroke()
ctx.closePath()
ctx.fillStyle = "#002776"; // AZUL
ctx.fill()

//ARCO
ctx.save()
ctx.rotate(0.7)
ctx.beginPath()
let end = 1.004 * Math.PI
let start = 14.7275 * Math.PI
ctx.ellipse(624, 218, 340, 340, Math.PI / 2, start, end)
ctx.lineTo(638, -102)
let end2 = 14.7265 * Math.PI
let start2 = 1.007 * Math.PI
ctx.ellipse(632, 238, 340, 340, Math.PI / 2, start2, end2, true)
ctx.stroke()
ctx.closePath()
ctx.fillStyle = "#fff"
ctx.fill()
ctx.restore()

//ESTRELAS
drawStar(463, 240, 5, 5, 2)     //SPICA             1
drawStar(298, 267, 5, 5, 2)     //PROCION           1
drawStar(452, 284, 5, 3, 1)     //DHANAB AL SHUJA   3
drawStar(425, 288, 5, 5, 2)
drawStar(519, 343, 5, 5, 2)     //ANTARES           1
drawStar(542, 345, 5, 3, 1)     //GRAFFIAS          3
drawStar(526, 358, 5, 4, 1.5)   //WEI               2
drawStar(519, 371, 5, 4, 1.5)   //SHAULA            2
drawStar(505, 377, 5, 3, 1)     //GIRTAB            3
drawStar(492, 376, 5, 3, 1)     //DENEBAKRAB        3 
drawStar(492, 390, 5, 4, 1.5)   //SARGAS            2
drawStar(491, 406, 5, 3, 1)     //APOLLYON          3
drawStar(474, 380, 5, 3, 1)     //B TRA             3
drawStar(461, 394, 5, 4, 1.5)   //ATRIA             2
drawStar(448, 376, 5, 3, 1)     //A TRA             3
drawStar(416, 409, 5, 1.5, 0.5) //POLARIS AUSTRALIS 5
drawStar(418, 361, 5, 5, 2)     //ACRUX             1
drawStar(432, 332, 5, 4, 1.5)   //MIMOSA            2
drawStar(410, 340, 5, 2, 1)     //INTROMETIDA       4
drawStar(399, 333, 5, 3, 1)     //PALIDA            3
drawStar(419, 318, 5, 4, 1.5)   //GACRUX            2
drawStar(356, 374, 5, 5, 2)     //CANOPUS           1
drawStar(335, 359, 5, 3, 1)     //ADHARA            3
drawStar(340, 343, 5, 4, 1.5)   //WEZEN             2
drawStar(296, 342, 5, 4, 1.5)   //MIRZAN            2
drawStar(310, 329, 5, 5, 2)     //SIRIO             1
drawStar(325, 320, 5, 2, 1)     //MULIPHEN          4
drawStar(361, 299, 5, 5, 2)     //ALPHARD           1

//ORDEM E PROGRESSO
let centerX = canvas.width / 2
let centerY = canvas.height - 30
let angle = Math.PI * 0.8

ctx.save()
ctx.rotate(0.29)
ctx.font = '20pt Calibri';
ctx.textAlign = 'center';
ctx.fillStyle = '#009c3b';
ctx.strokeStyle = '#009c3b';
ctx.lineWidth = 10;
drawTextAlongArc(ctx, "ORDEM E PROGRESSO", 485, 468, 340, 0.75)
ctx.restore()


//https://jsfiddle.net/baivong/ujnckxoa/
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.strokeSyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    // ctx.lineWidth = 5;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.fill();

}



// https://codepen.io/sesamechee/pen/WGGRpR
function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
    var len = str.length, s;
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / len) / 2);
    for (var n = 0; n < len; n++) {
        context.rotate(angle / len);
        context.save();
        context.translate(0, -1 * radius);
        s = str[n];
        context.fillText(s, 0, 0);
        context.restore();
    }
    context.restore();
}