let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons

let somTrilha;
let somPontos;
let somColidiu;

function preload (){
  imagemDaEstrada = loadImage ("Materiais/estrada.png");
  imagemDoAtor = loadImage ("Materiais/ator-1.png");
  imagemCarro1 = loadImage ("Materiais/carro-1.png");
  imagemCarro2 = loadImage ("Materiais/carro-2.png");
  imagemCarro3 = loadImage ("Materiais/carro-3.png");
  imagemCarros = [imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3, imagemCarro2];

somTrilha = loadSound ("sons/trilha.mp3");
somPontos = loadSound ("sons/pontos.wav");
somColidiu = loadSound ("sons/colidiu.mp3");
}