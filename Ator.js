//VariaveisAtor

let xAtor = 100;
let yAtor = 354;

let colisao = false;

let meuspontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 45, 45);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      20
    );
    if (colisao) {
      voltaAtor();
      somColidiu.play ();
      if (pontosMaiorQueZero()) {
        meuspontos -= 1;
      }
    }
  }
}

function voltaAtor() {
  yAtor = 354;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 215, 114));
  text(meuspontos, 500, 26);
}

function marcaPontos() {
  if (yAtor <= 0) {
    meuspontos += 1;
    voltaAtor();
    somPontos.play ();
  }
}

function pontosMaiorQueZero() {
  return (meuspontos > 0);
}

function podeSeMover() {
  return yAtor < 354;
}
