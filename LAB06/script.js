let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let bola = {
    x: 100,
    y:100,
    raio: 30,
}


function desenha_bola(){
    img = new Image()
    img.src = "bola.png"

    ctx.beginPath();
    ctx.drawImage(img, 200, 200, 150, 150) 
    ctx.closePath();
}

function desenhar(){
    desenha_bola()
}