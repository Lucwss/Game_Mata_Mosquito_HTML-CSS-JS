let width = 0;
let height = 0;
let vida = 1;
let tempo = 15;
let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
  criaMosquitoTempo = 1500;
}
else if (nivel === 'dificil') {
  criaMosquitoTempo = 1000;
}

else if (nivel === 'ChuckNorris') {
  criaMosquitoTempo = 750;
}

function ajudaTamanhoPalcoJogo() {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(width, height);
}

ajudaTamanhoPalcoJogo();

let cronometro = setInterval(() => { 
  tempo--;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito); 
    window.location.href="../HTML/vitoria.html";
  }
  else { 
    document.getElementById('cronometro').innerHTML = tempo;}
}, 1000);

function posicaoRandomica() {
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();

    if (vida > 3) {
      window.location.href = "../HTML/fim_de_jogo.html"
    }
    else {
      document.getElementById('v' + vida).src = "../IMG/coracao_vazio.png";
      vida++;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 90;
  let positionY = Math.floor(Math.random() * height) - 90;
  positionX < 0 ? positionX = 0 : positionX;
  positionY < 0 ? positionY = 0 : positionY;
  console.log(positionX + " " + positionY);

  let mosquito = document.createElement('img');
  mosquito.src = "../../Assets/IMG/mosquito.png";
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosquito.style.left = positionX + 'px';
  mosquito.style.top = positionY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function () { this.remove() };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
}
