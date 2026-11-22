const canvas = document.getElementById('tela');
const ctx = canvas.getContext('2d');


let bola = {
    x: 100,
    y: 100,
    raio: 20,
    velocidadeX: 3,
    velocidadeY: 2,
    cor: "red"
};

function desenharBola() {
    ctx.beginPath();

    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);

    ctx.fillStyle = bola.cor;

    ctx.fill();
}

function atualizarBola() {
    bola.x += bola.velocidadeX;
    bola.y += bola.velocidadeY;
}