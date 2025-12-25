function entrar() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
}

function abrirCarta() {
  document.getElementById("carta").style.display = "block";
  document.getElementById("galeria").style.display = "none";
}

function abrirFotos() {
  document.getElementById("galeria").style.display = "block";
  document.getElementById("carta").style.display = "none";
}

function tocarMusica() {
  document.getElementById("musica").play();
}

/* Lightbox */
function zoom(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function fecharZoom() {
  document.getElementById("lightbox").style.display = "none";
}

/* CORAÇÕES */
function criarCoracao() {
  const coracao = document.createElement("span");
  coracao.innerHTML = "💙";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.getElementById("hearts").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 8000);
}

setInterval(criarCoracao, 300);
