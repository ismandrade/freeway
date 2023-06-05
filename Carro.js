//Variaveis Carro

let xCarros = [600, 600, 600, 600, 600];
let yCarros = [46, 100, 154, 215, 267];
let velocidadeCarros = [2, 3, 5.5, 2.5, 4.5];
let comprimentoCarro = 60;
let alturaCarro = 30;

function mostraCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -50;
}
