const canvas = document.getElementById('tela');
const ctx = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 500;

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

    if (bola.x + bola.raio >= canvas.width || bola.x - bola.raio <= 0) {
        bola.velocidadeX *= -1;
    }

    if (bola.y + bola.raio >= canvas.height || bola.y - bola.raio <= 0) {
        bola.velocidadeY *= -1;
    }
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    atualizarBola();
    desenharBola();

    requestAnimationFrame(animar);
}

animar();